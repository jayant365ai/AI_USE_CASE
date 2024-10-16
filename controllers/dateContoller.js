const getCurrentIndiaTime = async (req, res) => {
  try {
    const toolCallId = req.body.toolCallId;
    console.log(req.body);    // Create a new Date object
    const now = new Date();

    // Convert the time to India's time zone (UTC +5:30)
    const indiaOffset = 5.5 * 60; // IST offset in minutes
    const usOffset = -4 * 60;
    const utcOffset = now.getTimezoneOffset(); // Get the UTC offset in minutes
    const indiaTime = new Date(
      now.getTime() + (usOffset + utcOffset) * 60000
    ); // Convert to IST

    // Format the date and time in DD-MM-YYYY format
    const day = String(indiaTime.getDate()).padStart(2, "0");
    const month = String(indiaTime.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const year = indiaTime.getFullYear();
    const hours = String(indiaTime.getHours()).padStart(2, "0");
    const minutes = String(indiaTime.getMinutes()).padStart(2, "0");
    const seconds = String(indiaTime.getSeconds()).padStart(2, "0");

    const date_now = `${day}-${month}-${year}`;
    const time_now = `${hours}:${minutes}:${seconds}`;

    return res.status(200).json({ "results": [
        {
            toolCallId,
            "result": { date_now, time_now }
        }
    ] });
  } catch (error) {
    return res.status(200).json({ msg: "Failed to send date", error });
  }
};

export default {
  getCurrentIndiaTime,
};
