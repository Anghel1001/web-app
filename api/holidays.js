module.exports = (req, res) => {
    const holidays = [
      { name: "New Year's Day", date: "2024-01-01" },
      { name: "Independence Day", date: "2024-07-04" },
      { name: "Christmas Day", date: "2024-12-25" },
    ];
    res.json(holidays);
  };
  