import "../css/Write.css";
export default function Write() {
  return (
    <div className="write">
      <img
        src="data:image/jpeg;base64,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"
        alt=""
        className="writeImg"
      />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className=" writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            type="text"
            className="writeInput writeText"
            placeholder="Tell your story..."
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}