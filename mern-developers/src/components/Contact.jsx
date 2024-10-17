export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="flex flex-col items-left justify-center w-5/12 shadow-lg p-10 my-10">
        <div className="text-2xl mb-10 font-bold">Contact me</div>
        <div className="flex items-center justify-between">
          <input
            className="border border-gray-300 p-2 w-6/12 mr-2"
            type="text"
            placeholder="Name"
          />
          <input
            className="border border-gray-300 p-2 w-6/12"
            type="text"
            placeholder="Email"
          />
        </div>
        <textarea
          className="mt-5 mb-10 border border-gray-300 rounded p-2 h-52"
          placeholder="Type Message"
        />
        <button className="bg-blue-300 hover:bg-blue-400 px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}
