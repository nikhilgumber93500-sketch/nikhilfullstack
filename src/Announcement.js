function Announcement() {
  return (
    <section className="announcement">

      <div className="previous">
        <h2>Previous Announcement</h2>

        <marquee direction="up" scrollamount="3">
          <p>Admission form is available now.</p>
          <p>Check your examination schedule.</p>
          <p>Submit your assignment on time.</p>
        </marquee>
      </div>

      <div className="news">
        <h2>News</h2>

        <marquee direction="up" scrollamount="3">
          <p>New notification has been released.</p>
          <p>College event is coming soon.</p>
          <p>Important notice for students.</p>
        </marquee>
      </div>

    </section>
  );
}

export default Announcement;