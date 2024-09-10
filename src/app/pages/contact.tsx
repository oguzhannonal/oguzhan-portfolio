export default function Contact() {
  return (
    <div className="self-center mx-auto max-w-[1400px]  p-4 mt-20 md:mt-40">
      <div>
        <h1 className="font-semibold text-[40px] md:text-[65px] text-center">
          Let’s Build Something Great Together
        </h1>
        <p className="font-regular text-[16px] md:text-[21px] text-center">
          Ready to bring your vision to life? Let’s connect and turn your ideas
          into reality.
        </p>
      </div>
      <div>
        <form
          className="mt-8 flex flex-col"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="redirect"
            value="https://oguzhanonal.vercel.app/"
          ></input>
          <input
            type="hidden"
            name="access_key"
            value="3e42b85f-6981-4a10-9965-c60c55de4919"
          />
          <input
            type="hidden"
            name="subject"
            value="New Contact Form Personal Website"
          />
          <input type="hidden" name="from_name" value="My Website" />
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold text-[16px]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-2 border-gray-300 rounded-[5px] p-2 mt-2 focus:bg-orange-50"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="email" className="font-semibold text-[16px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-2 border-gray-300 rounded-[5px] p-2 mt-2 focus:bg-orange-50 transition-colors duration-500"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="message" className="font-semibold text-[16px] ">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="border-2 border-gray-300 rounded-[5px] p-2 mt-2 focus:bg-orange-50 transition-colors duration-500"
              rows={10}
            ></textarea>
          </div>
          <button className="bg-orange-500 text-white rounded p-2 mt-4 grow-0 self-end w-max hover:bg-orange-400 transition-colors duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
