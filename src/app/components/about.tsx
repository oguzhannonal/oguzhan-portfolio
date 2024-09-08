export default function About() {
  return (
    <div className="mt-[70px] items-center">
      <h1 className="text-[65px] font-semibold">About Me</h1>
      <p className="font-regular text-[21px] mt-4">
        I am a fullstack developer who is passionate about various technologies
        and tools. I am currently working with Python, React, Vue, Nuxt,
        Next.js, Node.js, and Postgresql. I am also interested in learning new
        technologies and tools. I am a quick learner and a team player.
      </p>
      <div className="prose font-regular text-[21px] mt-4">
        <h3>Gameflex - Full-Stack Developer (Jun 2022 - Present)</h3>
        <ul className="list-disc pl-5">
          <li>
            Built front-end applications using{" "}
            <strong>Vue 3, JavaScript, HTML5</strong>, and <strong>SCSS</strong>
            , with <strong>Tailwind CSS</strong> for modern and responsive UIs.
          </li>
          <li>
            Developed a web-based leave management system using{" "}
            <strong>PostgreSQL, Sequelize.js</strong>, and{" "}
            <strong>Google Calendar API integration</strong>. The app allows
            employees to manage their leaves, sync holidays, and work hours with
            Google Calendar.
          </li>
          <li>
            Created a web-based asset tracking app for HR, enabling staff to
            assign assets to employees, monitor usage, and track return dates.
          </li>
          <li>
            Developed an idea creation application using the{" "}
            <strong>Quill editor</strong>, designed to help artists organize
            their ideas visually and efficiently.
          </li>
          <li>
            Implemented a tagging system for a note-taking app, allowing users
            to classify and organize notes by keyword tags.
          </li>
          <li>
            Designed a phone input component with country flags to help users
            easily select their country code while entering phone numbers,
            ensuring accuracy.
          </li>
          <li>
            Built an avatar component with built-in update and delete
            functionalities, offering users a seamless way to manage their
            profile pictures.
          </li>
          <li>
            Extensive experience working with dates across databases, front-end
            interfaces, and multiple time zones, ensuring consistent handling
            and display of time-related data across various environments.
          </li>
        </ul>
      </div>
    </div>
  );
}
