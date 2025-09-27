import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());

/* =============== SIGNUP =============== */
app.post("/signup", async (req, res) => {
  try {
    let { name, email, password, role, subject, rate, location, description } = req.body;

    // Build data object dynamically
    const data = {
      name,
      email,
      password,
      role,
    };

    // If tutor, add tutor-specific fields
    if (role === "TUTOR") {
      data.subject = subject || null;
      data.rate = rate ? parseInt(rate, 10) : null;
      data.location = location || null;
      data.description = description || null;
    }

    const user = await prisma.user.create({ data });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Signup failed" });
  }
});

/* =============== LOGIN =============== */
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json(user); // later, send token
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

/* =============== TUTORS =============== */
app.get("/tutors", async (req, res) => {
  const tutors = await prisma.user.findMany({
    where: { role: "TUTOR" }
  });
  res.json(tutors);
});

/* =============== BOOKINGS =============== */
app.post("/bookings", async (req, res) => {
  try {
    const { studentId, tutorId, date, mode } = req.body;

    // Convert incoming date string into a real Date object
    const parsedDate = new Date(date);

    if (isNaN(parsedDate)) {
      return res.status(400).json({ error: "Invalid date format" });
    }

    const booking = await prisma.booking.create({
      data: {
        studentId: parseInt(studentId),
        tutorId: parseInt(tutorId),
        date: parsedDate,
        mode,
      },
    });

    res.json(booking);
  } catch (err) {
    console.error("❌ Booking error:", err);
    res.status(500).json({ error: err.message });
  }
});

/* =============== MESSAGES =============== */
// Send a message
app.post("/messages", async (req, res) => {
  try {
    const { fromUserId, toUserId, content } = req.body;

    const message = await prisma.message.create({
      data: {
        fromUserId: parseInt(fromUserId),
        toUserId: parseInt(toUserId),
        content,
      },
    });

    res.json(message);
  } catch (err) {
    console.error("❌ Message error:", err);
    res.status(500).json({ error: err.message });
  }
});
app.get("/messages/:user1/:user2", async (req, res) => {
  try {
    const { user1, user2 } = req.params;

    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { fromUserId: parseInt(user1), toUserId: parseInt(user2) },
          { fromUserId: parseInt(user2), toUserId: parseInt(user1) },
        ],
      },
      orderBy: { createdAt: "asc" },
    });

    res.json(messages);
  } catch (err) {
    console.error("❌ Fetch messages error:", err);
    res.status(500).json({ error: err.message });
  }
});


/* =============== START SERVER =============== */
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
app.get("/", (req, res) => res.send("✅ API is running"));


