function Notification({ message }) {
  if (!message) {
    return null;
  }

  return (
    <div className="notification-success">
      <p style={{ color: "red", margin: 0, marginBottom: -15 }}>
        System Mesage:
      </p>
      <br />
      {message}
    </div>
  );
}

export default Notification;
