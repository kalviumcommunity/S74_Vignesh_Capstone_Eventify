const getAllEvents = (req, res) => {
  const sampleEvents = [
    { id: 1, name: "Wedding at Trichy", date: "2025-06-15" },
    { id: 2, name: "Corporate Event in Chennai", date: "2025-07-01" },
  ];

  res.status(200).json({
    message: "Events fetched successfully",
    events: sampleEvents,
  });
};

module.exports = { getAllEvents };
