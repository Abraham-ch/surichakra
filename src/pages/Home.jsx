import Header from "../components/Header";
import "../App.css";
import Footer from "../components/Footer";
import { useState } from "react";
import video from "../assets/video.mp4";
import videoperson from "../assets/1024.mp4";
import { motion } from "framer-motion";
import Section from "../components/motionSection";

const VideoComponent=()=>{
  return (
    <Section>
      <div className="h-full w-full mt-20 mb-32">
        <div className="w-11/12 mx-auto h-full bg-white rounded-lg flex flex-col items-center justify-between">
          <span>
            <h2 className="text-center leading-tight font-semibold text-lg min-[300px]:text-xl min-[500px]:text-2xl sm:text-3xl md:text-4xl pt-4 min-[600px]:pt-8 sm:pt-12 md:pt-14 lg:pt-16 ">
              Estima tus registros
            </h2>
            <div className="text-center pt-1 min-[340px]:pt-4 sm:pt-8 font-semibold text-3xl min-[440px]:text-4xl min-[600px]:text-5xl lg:text-7xl transition-all">
              EN TIEMPO REAL
            </div>
            <p className="min-[347px]:block hidden text-center pt-4 pb-2 sm:pt-8 max-w-xl xl:max-w-3xl xl:pb-4 text-xs min-[450px]:text-xs px-4 sm:px-0 min-[600]:text-sm md:text-base transition-all">
              Descubre la potencia de Surichakra a través de su dashboard, donde
              podrás monitorizar en tiempo real variables clave de calidad del
              aire, la tierra y el agua. Además, nuestra plataforma ofrece
              seguridad avanzada para proteger la información de tus
              dispositivos y usuarios.
            </p>
            <p className="min-[347px]:hidden block text-center pt-4 sm:pt-8 max-w-xl xl:max-w-3xl xl:pb-4 text-xs min-[350px]:text-sm px-4 sm:px-0 sm:text-base xl:text-base transition-all">
              Descubre la potencia de Surichakra a través de su dashboard, donde
              podrás monitorizar en tiempo real.
            </p>
          </span>
          <div className="w-full sm:w-5/6 rounded-lg self-center">
            <video muted autoPlay className="sm:rounded-t-xl">
              <source src={video} type="video/mp4"/>
              Tu navegador no soporta la etiqueta de video.
            </video>
          </div>
        </div>
      </div>
    </Section>
  );
}

const VideoPersonalization = () => {
  return (
    <Section>
      <div className="h-full w-full mt-20 mb-32 flex min-[1000px]:flex-row flex-col justify-center items-center gap-y-8 px-4 min-[600px]:px-10 min-[1000px]:px-20 gap-x-20 transition-all">
        <div className="flex flex-col justify-between text-white w-full md:w-full gap-y-4 min-[600px]:gap-y-8">
          <h2 className="font-semibold text-2xl min-[400px]:text-3xl min-[600px]:text-4xl text-left min-[600px]:text-center md:text-left min-[1090px]:text-5xl text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-cyan-400 tracking-wide leading-snug transition-all">
            Personaliza tu Experiencia
          </h2>
          <p className="min-[600px]:text-lg min-[500px]:text-base min-[400px]:text-sm text-xs transition-all">
            Con Surichakra, puedes personalizar tu dashboard para adaptarlo a
            tus necesidades específicas. Añade o quita variables, ajusta el
            tamaño de los gráficos y añade widgets para obtener la información
            que más te interesa de manera rápida y sencilla.
          </p>
        </div>
        <div className="rounded-lg self-center w-full min-[600px]:w-11/12 min-[1000px]:w-[1300px] min-[1090px]:w-[1500px] min-[1178px]:w-[1900px] transition-all">
          <video muted autoPlay className="rounded-xl">
            <source src={videoperson} type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      </div>
    </Section>
  );
}

const ContactPopup = ({ isOpen, togglePopup }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 backdrop-blur-sm bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 px-10 py-8">
            <h2 className="text-xl font-bold mb-4 text-black">Contáctanos</h2>

            <form
              action="https://formsubmit.co/ascaytaos@gmail.com"
              target="_blank"
              method="POST"
              className="flex flex-col gap-y-4"
            >
              <label htmlFor="Email" className="font-semibold text-black">
                Email
              </label>
              <input
                id="Email"
                name="Email"
                type="email"
                placeholder="Escribe tu email"
                className="text-black focus:border-transparent focus:ring-0 border-2 px-4 py-2 w-2/3"
              />
              <label htmlFor="Name" className="font-semibold text-black">
                Nombre y Apellido
              </label>
              <input
                id="Name"
                name="Name"
                type="text"
                className="border-2 border-gray-200 text-black px-4 py-2 overflow-scroll overflow-y-auto w-2/3"
                placeholder="Dinos tu nombre"
              />
              <label htmlFor="Propuesta" className="font-semibold text-black">
                Asunto
              </label>
              <textarea
                name="Propuesta"
                id="Propuesta"
                placeholder="Propuesta"
                className="form-textarea mt-1 block w-full rounded-md h-32 border-gray-300 shadow-sm px-4 py-2 border-2 text-black "
                rows="3"
              ></textarea>

              <div className="flex justify-between items-center gap-x-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-6 rounded self-center w-full"
                >
                  Enviar
                </button>
                <a
                  href="https://wa.me/956394308"
                  target="_blank"
                  className="flex bg-green-500 text-white font-bold py-2 px-4 rounded flex-row gap-x-3 w-full"
                  title="Whatsapp"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                  </svg>
                  WhatsApp
                </a>

                <button
                  className=" bg-gray-500 text-white font-bold py-2 px-4 rounded w-full"
                  onClick={togglePopup}
                >
                  Cerrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className="scroll bg-[#161815] bg-[radial-gradient(#ffffff33_1px,#161815_1px)] bg-[size:50px_50px]">
      <Header />
      <Section>
        <div className="pt-16 h-full w-full flex flex-col justify-center items-center">
          <div className="max-w-7xl flex flex-col justify-center items-center w-full roboto gap-y-6">
            <motion.h1
              className=" text-3xl min-[440px]:text-5xl sm:text-6xl transition-all lg:text-7xl font-semibold bg-gradient-to-r bg-clip-text text-transparent from-purple-400 to-emerald-400 brightness-150 text-center "
              initial={{ opacity: 0, scale: 1, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Gestión IoT en la Nube
              <div className="text-white font-semibold text-center">
                Surichakra
              </div>
            </motion.h1>
            <motion.p
              className="text-center text-sm md:text-base text-[#909090] max-w-2xl lg:text-lg font-sans px-4"
              initial={{ opacity: 0, scale: 0.5, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Surichakra es una plataforma de gestión IoT en la nube que unifica
              la conexión, monitorización y gestión de una amplia gama de
              dispositivos IoT. Destacamos por nuestra interoperabilidad,
              permitiendo la integración con dispositivos industriales,
              comerciales y de hogar inteligente.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <form
                action="https://formsubmit.co/ascaytaos@gmail.com"
                target="_blank"
                method="POST"
              >
                <div className="flex border-[1px] px-2 mx-2 py-2 rounded-lg">
                  <input
                    type="email"
                    placeholder="Your email"
                    name="email"
                    id="email"
                    required
                    className="bg-[#161815] focus:outline-none rounded-lg py-2 px-4 sm:px-8 text-white w-32 min-[440px]:w-48 sm:max-w-2xl"
                  />
                  <button
                    className="bg-blue-950 text-white font-normal min-[440px]:font-bold hover:scale-105 transition-all brightness-150 rounded-lg px-4 sm:px-8 py-2"
                    type="submit"
                  >
                    Start for free
                  </button>
                </div>
              </form>
            </motion.div>

            <div className="grid gap-y-4 sm:grid-cols-3 w-auto px-12 md:gap-x-6 transition-all gap-x-2 lg:gap-x-12 py-4">
              <motion.div
                className="text-adjust-100 bg-neutral-800 text-white rounded-lg px-8 py-6 flex flex-col justify-center w-auto"
                initial={{ opacity: 0, scale: 0.5, x: -200 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <span className="lg:px-2 flex items-center gap-x-2">
                  <span>
                    <svg
                      className="text-sky-500 w-5 lg:w-6 h-full"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    </svg>
                  </span>
                  <h3 className="py-1 transition-all lg:text-base text-sm font-medium">
                    Interfaz Intuitiva
                  </h3>
                </span>
                <p className="text-adjust-100 pt-2 lg:pt-3 px-0 lg:px-3 text-pretty text-sm roboto text-[#909090]">
                  Configura fácilmente tus dispositivos, visualiza datos en
                  tiempo real, configura alertas y automatiza tareas.
                </p>
              </motion.div>

              <motion.div
                className="text-adjust-100 bg-neutral-800 text-white rounded-lg px-8 py-6 flex flex-col justify-center"
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <span className="lg:px-2 flex items-center gap-x-2">
                  <span>
                    <svg
                      className="text-sky-500 w-5 lg:w-6 h-full"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                      <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                      <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                      <path d="M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" />
                    </svg>
                  </span>
                  <h3 className="py-1 transition-all lg:text-base text-sm font-medium">
                    Amplia Compatibilidad
                  </h3>
                </span>
                <p className="text-adjust-100 pt-2 lg:pt-3 px-0 lg:px-3 text-pretty text-sm roboto text-[#909090]">
                  Integra una variedad de dispositivos con plataformas líderes
                  de IoT y asistentes de voz como Alexa.
                </p>
              </motion.div>

              <motion.div
                className="text-adjust-100 bg-neutral-800 text-white rounded-lg px-8 py-6 flex flex-col justify-center"
                initial={{ opacity: 0, scale: 0.5, x: 200 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <span className="lg:px-2 flex items-center gap-x-2">
                  <span>
                    <svg
                      className="text-sky-500 w-5 lg:w-6 h-full"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    </svg>
                  </span>
                  <h3 className="py-1 transition-all lg:text-base text-sm font-medium">
                    Automatización Avanzada
                  </h3>
                </span>
                <p className="text-adjust-100 pt-2 px-0 lg:px-3 text-pretty lg:pt-3 text-sm roboto text-[#909090]">
                  Crea automatizaciones complejas para hogares inteligentes y
                  entornos comerciales e industriales.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      <VideoComponent />

      <VideoPersonalization />

      <Section>
        <div className="h-full w-full flex flex-col mt-24 text-white">
          <div className="max-w-7xl w-full mx-auto">
            <h1 className="font-semibold text-3xl min-[440px]:text-5xl text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-cyan-400 tracking-wide leading-snug py-8 px-8 max-w-5xl ">
              ¿Por qué Surichakra es diferente?
            </h1>
            <div className="divide-x flex items-center min-[440px]:px-0 px-4">
              <p className=" hidden min-[440px]:block text-base transition-all md:text-lg font-light max-w-2xl px-8 items-center text-pretty">
                Surichakra destaca por su enfoque en la interoperabilidad y
                facilidad de uso. Ofrecemos una solución integrada y segura para
                la gestión de dispositivos IoT, mejorando la eficiencia
                operativa y la comodidad en hogares y negocios.
              </p>
              <div className="px-8 items-center">
                <h3 className="text-3xl md:text-4xl font-semibold">80+</h3>
                <p className="text-base md:text-lg ">Modulos activos</p>
              </div>
              <div className="px-8 items-center">
                <h3 className="text-3xl md:text-4xl font-semibold">64+</h3>
                <p className="text-base md:text-lg ">Variables medidas</p>
              </div>
            </div>
            <div className="grid grid-cols-1 min-[440px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-x-8 gap-y-8 px-8 py-16 transition-all w-full justify-center items-center">
              <div className="items-center flex justify-center rounded-lg px-4 py-4 col-span-1 min-[440px]:col-span-2 sm:col-span-3 row-span-1 lg:col-span-1 lg:border-2 lg:h-32 ">
                <p className="text-base text-center min-[440px]:text-left min-[440px]:text-xl font-semibold">
                  Características
                </p>
              </div>
              <div className="rounded-lg h-32 px-4 py-4 bg-neutral-800 shadow-lg hover:brightness-115 border-2 border-transparent flex justify-center items-center">
                <p className="text-md items-center font-semibold">
                  Plataforma de Gestión IoT en la Nube
                </p>
                <svg width="100" height="100" viewBox="0 0 72 64" fill="none">
                  <g>
                    <path
                      d="M36.918 63.2717C43.7482 62.8694 48.9591 57.0062 48.5568 50.176C48.1545 43.3458 42.2914 38.1349 35.4611 38.5372C28.6309 38.9395 23.42 44.8026 23.8223 51.6329C24.2246 58.4631 30.0878 63.674 36.918 63.2717Z"
                      fill="white"
                    />
                    <path
                      d="M33.0138 48.4269C33.0119 49.0084 32.538 49.4778 31.9565 49.4758C31.375 49.4739 30.9057 49.0007 30.9077 48.4185C30.9096 47.837 31.3835 47.3677 31.965 47.3696C32.5465 47.3722 33.0164 47.8455 33.0138 48.4269Z"
                      fill="#183DFF"
                    />
                    <path
                      d="M41.7667 48.4606C41.7641 49.0421 41.2909 49.5115 40.7094 49.5095C40.1279 49.5076 39.6585 49.0337 39.6605 48.4522C39.6631 47.8707 40.1363 47.4014 40.7178 47.4033C41.2993 47.4059 41.7686 47.8791 41.7667 48.4606Z"
                      fill="#183DFF"
                    />
                    <path
                      d="M30.028 18.9633C34.676 23.9841 34.3745 31.8223 29.3537 36.4703C24.3329 41.1184 16.4948 40.8163 11.8468 35.7961C7.19873 30.7753 7.50016 22.9372 12.521 18.2892C17.5417 13.6411 25.3799 13.9426 30.028 18.9633Z"
                      fill="#0B29C6"
                    />
                    <path
                      d="M16.9421 27.7379C17.3369 28.1645 17.3116 28.8309 16.8844 29.2257C16.4579 29.6205 15.7915 29.5952 15.3967 29.1687C15.0019 28.7421 15.0271 28.0757 15.4537 27.6809C15.8809 27.2855 16.5467 27.3114 16.9421 27.7379Z"
                      fill="white"
                    />
                    <path
                      d="M23.3644 21.7914C23.7592 22.218 23.734 22.8844 23.3068 23.2792C22.8802 23.674 22.2138 23.6487 21.819 23.2221C21.4242 22.7956 21.4495 22.1291 21.8761 21.7344C22.3033 21.3396 22.9697 21.3648 23.3644 21.7914Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M26.4065 26.0479C26.7997 25.9372 27.2082 26.1662 27.3189 26.5593C27.8918 28.594 27.306 30.7856 25.7885 32.2472L25.7885 32.2472C24.2136 33.764 21.8957 34.2446 19.8338 33.4897C19.4502 33.3492 19.2531 32.9244 19.3936 32.5409C19.534 32.1573 19.9588 31.9602 20.3424 32.1006C21.8783 32.663 23.5991 32.3021 24.7624 31.1818C25.8833 30.1022 26.3218 28.4756 25.8951 26.9603C25.7843 26.5671 26.0133 26.1586 26.4065 26.0479Z"
                      fill="white"
                    />
                    <path
                      d="M42.5789 19.0119C37.892 23.9964 38.1331 31.8365 43.1176 36.5234C48.1021 41.2103 55.9422 40.9692 60.6291 35.9847C65.3161 31.0002 65.0749 23.1601 60.0904 18.4732C55.1059 13.7863 47.2658 14.0274 42.5789 19.0119Z"
                      fill="#6981FF"
                    />
                    <path
                      d="M55.5967 27.8879C55.198 28.3119 55.2188 28.9776 55.6428 29.3763C56.0661 29.775 56.7325 29.7543 57.1311 29.3303C57.5292 28.907 57.5091 28.2406 57.0851 27.8419C56.6612 27.4439 55.9947 27.4639 55.5967 27.8879Z"
                      fill="white"
                    />
                    <path
                      d="M49.2198 21.8918C48.8211 22.3151 48.8418 22.9815 49.2652 23.3802C49.6891 23.7789 50.3555 23.7582 50.7535 23.3342C51.1516 22.9109 51.1315 22.2445 50.7075 21.8458C50.2849 21.4478 49.6185 21.4679 49.2198 21.8918Z"
                      fill="white"
                    />
                    <path
                      d="M36.2435 5.89682C35.8143 4.61391 35.3016 3.33748 34.4854 2.25877C33.6692 1.18006 32.514 0.305555 31.1825 0.0644017C28.9486 -0.340114 26.6524 1.21118 25.7831 3.30896C24.9138 5.40609 25.2911 7.86754 26.3387 9.88169C27.3863 11.8958 29.0394 13.5275 30.7709 14.9958C32.5024 16.4642 34.3454 17.8112 35.9265 19.4403C38.9928 17.5487 41.9229 14.7638 44.3597 12.1098C45.7451 10.6013 47.0468 8.91384 47.5239 6.92173C48.001 4.92961 47.4584 2.57188 45.7632 1.42186C44.1445 0.323708 41.895 0.593388 40.1992 1.56902C38.5033 2.54466 37.4674 4.37081 36.2435 5.89682Z"
                      fill="white"
                    />
                    <path
                      d="M62.2122 53.4934C63.4232 54.097 64.6879 54.637 66.0279 54.8224C67.3678 55.0084 68.8031 54.8094 69.9155 54.0386C71.7812 52.7453 72.3076 50.0246 71.4396 47.9268C70.5709 45.829 68.5645 44.3555 66.3993 43.6722C64.2341 42.989 61.9121 43.0039 59.649 43.1899C57.3866 43.376 55.1306 43.7267 52.8604 43.6923C52.0293 47.1982 51.9269 51.2394 52.0805 54.8386C52.168 56.8851 52.4403 58.9985 53.5112 60.7442C54.5822 62.49 56.6333 63.7736 58.6448 63.3885C60.5663 63.0203 61.9659 61.2389 62.4754 59.3498C62.9843 57.4614 62.4255 55.4376 62.2122 53.4934Z"
                      fill="#0B29C6"
                    />
                    <path
                      d="M9.81186 53.2902C8.59637 53.8846 7.32773 54.4143 5.98583 54.5899C4.64393 54.7656 3.21062 54.5556 2.10468 53.7764C0.248708 52.4688 -0.256298 49.7435 0.627932 47.6529C1.51281 45.5622 3.53088 44.1043 5.70127 43.4379C7.87165 42.7715 10.1937 42.8045 12.4548 43.0081C14.716 43.2116 16.9693 43.5799 19.2396 43.563C20.0434 47.0753 20.1141 51.1166 19.9332 54.7151C19.8301 56.761 19.541 58.8724 18.4565 60.6097C17.3719 62.347 15.3111 63.6151 13.3021 63.2138C11.3833 62.8307 9.99794 61.0382 9.50332 59.1459C9.0087 57.2524 9.58302 55.233 9.81186 53.2902Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M53.2149 32.9889C53.3256 33.3821 53.0967 33.7906 52.7035 33.9013C50.6689 34.4742 48.4772 33.8884 47.0156 32.3709L47.0156 32.3709C45.4988 30.796 45.0182 28.4781 45.7732 26.4162C45.9136 26.0326 46.3384 25.8355 46.722 25.976C47.1055 26.1164 47.3026 26.5412 47.1622 26.9247C46.5999 28.4607 46.9607 30.1815 48.0811 31.3448C49.1606 32.4657 50.7873 32.9041 52.3025 32.4775C52.6957 32.3667 53.1042 32.5957 53.2149 32.9889Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M41.013 53.6303C41.3693 53.83 41.4963 54.2808 41.2965 54.6371C40.263 56.4809 38.299 57.6164 36.1925 57.5768L36.1924 57.5768C34.0063 57.5357 32.0275 56.2366 31.1033 54.2448C30.9314 53.8742 31.0924 53.4345 31.4629 53.2626C31.8334 53.0907 32.2732 53.2517 32.4451 53.6222C33.1335 55.1059 34.6054 56.0675 36.2203 56.0979C37.7762 56.1271 39.2365 55.287 40.0062 53.9138C40.206 53.5575 40.6567 53.4305 41.013 53.6303Z"
                      fill="#183DFF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_204_451">
                      <rect
                        width="71.9571"
                        height="64"
                        fill="white"
                        transform="translate(0.0428467)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="rounded-lg h-32 px-4 py-4 bg-neutral-800 shadow-lg hover:brightness-115 border-2 border-transparent flex justify-center items-center">
                <p className="text-md items-center font-semibold">
                  Interoperabilidad y compatibilidad
                </p>
                <svg width="100" height="100" viewBox="0 0 64 64" fill="none">
                  <g clipPath="url(#clip0_4_26)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31.9996 0C49.6612 0 64 14.3387 64 32C64 49.6616 49.6612 64 31.9996 64C14.3384 64 8.06351e-09 49.6612 8.06351e-09 32C-0.00039263 14.3387 14.3384 0 31.9996 0Z"
                      fill="#001375"
                    />
                    <mask id="mask0_4_26" x="0" y="0" width="64" height="64">
                      <path
                        d="M31.9996 0C49.6612 0 64 14.3387 64 32C64 49.6616 49.6612 64 31.9996 64C14.3384 64 8.06351e-09 49.6612 8.06351e-09 32C-0.00039263 14.3387 14.3384 0 31.9996 0Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_4_26)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M41.9686 26.637C44.4615 26.637 46.4859 28.6614 46.4859 31.1547C46.4859 33.6475 44.4615 35.672 41.9686 35.672C39.4754 35.672 37.4509 33.6475 37.4509 31.1547C37.4509 28.6614 39.475 26.637 41.9686 26.637Z"
                        fill="white"
                      />
                    </g>
                    <mask id="mask1_4_26" x="0" y="0" width="64" height="64">
                      <path
                        d="M31.9996 0C49.6612 0 64 14.3387 64 32C64 49.6616 49.6612 64 31.9996 64C14.3384 64 8.06351e-09 49.6612 8.06351e-09 32C-0.00039263 14.3387 14.3384 0 31.9996 0Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask1_4_26)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.0765 36.4412C24.1367 36.4412 25.8089 38.1138 25.8089 40.174C25.8089 42.2337 24.1367 43.906 22.0765 43.906C20.0167 43.906 18.3445 42.2337 18.3445 40.174C18.3441 38.1142 20.0167 36.4412 22.0765 36.4412Z"
                        fill="white"
                      />
                    </g>
                    <mask id="mask2_4_26" x="0" y="0" width="64" height="64">
                      <path
                        d="M31.9996 0C49.6612 0 64 14.3387 64 32C64 49.6616 49.6612 64 31.9996 64C14.3384 64 8.06351e-09 49.6612 8.06351e-09 32C-0.00039263 14.3387 14.3384 0 31.9996 0Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask2_4_26)"></g>
                    <mask id="mask3_4_26" x="0" y="0" width="64" height="64">
                      <path
                        d="M31.9996 0C49.6612 0 64 14.3387 64 32C64 49.6616 49.6612 64 31.9996 64C14.3384 64 8.06352e-09 49.6613 8.06352e-09 32C-0.00039263 14.3387 14.3384 0 31.9996 0Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask3_4_26)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.8857 62.7498C10.6413 57.1814 8.17204 43.2962 7.59879 39.645C6.86338 34.9617 5.26378 32.1841 7.76488 31.3596C10.447 30.475 12.4353 37.8389 17.732 43.659C23.4343 49.9251 31.0299 45.7938 32.5282 49.7339C33.2981 51.7579 28.0788 53.5857 25.8969 56.4299C22.3506 61.0532 22.6671 64.0177 22.8504 68.3524"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M42.0918 69.0871C41.5622 66.738 41.9132 64.1312 41.7133 61.7412C41.3953 57.9429 40.2417 53.9662 37.9161 50.8966C36.8721 49.518 35.6443 48.1941 34.1696 47.2718C32.6681 46.333 30.9822 45.7106 29.5867 44.601C28.4591 43.7042 26.9973 42.0285 27.238 40.4434C27.5203 38.5799 29.9417 38.7743 31.2908 38.8932C35.5556 39.2686 39.844 39.8269 44.0342 38.5595C47.9155 37.3855 50.6596 34.4576 53.0841 31.3762C53.4941 30.8552 54.968 28.8708 55.9241 29.3887C57.4758 30.2281 57.2846 33.1866 57.3411 34.6202C57.5732 40.4363 56.8919 46.13 54.9853 51.6532C53.527 55.8788 51.5689 60.4389 48.4361 63.7064"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_4_26">
                      <rect width="64" height="64" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="rounded-lg h-32 px-4 py-4 bg-neutral-800 shadow-lg hover:brightness-115 border-2 border-transparent flex justify-center items-center">
                <p className="text-md items-center font-semibold">
                  Automatización para el negocio y hogar
                </p>
                <svg width="100" height="100" viewBox="0 0 61 64" fill="none">
                  <g clipPath="url(#clip0_4_86)">
                    <path
                      d="M59.0974 25.6804L31.2019 0.863267C30.1762 -0.303018 28.3534 -0.284732 27.3505 0.900983L0.768229 25.5067C-0.626628 27.1564 0.540236 29.6838 2.70024 29.6924L5.65395 29.7038C6.17624 29.7061 6.59794 30.1307 6.59566 30.653L6.47795 61.0673C6.4728 62.4718 7.60653 63.6147 9.01167 63.6204L50.8048 63.7827C52.2094 63.7878 53.3522 62.6536 53.358 61.2496L53.474 31.2998C53.4768 30.521 54.1105 29.8924 54.8894 29.8953L57.1785 29.9044C59.3711 29.9124 60.546 27.3273 59.0974 25.6804Z"
                      fill="#001375"
                    />
                    <path
                      d="M43.0614 41.8793L30.1682 54.6724L17.3751 41.7793C13.3408 38.181 12.9917 32.2256 15.9334 28.7061C19.2271 24.7656 26.1717 24.4478 30.2682 28.9861C33.7677 25.5496 38.9145 25.0284 42.2099 27.2684C46.3437 30.0776 47.3877 37.1107 43.0614 41.8793Z"
                      fill="white"
                    />
                    <mask id="mask0_4_86" x="13" y="25" width="33" height="30">
                      <path
                        d="M43.0614 41.8793L30.1682 54.6724L17.3751 41.7793C13.3408 38.181 12.9917 32.2256 15.9334 28.7061C19.2271 24.7656 26.1717 24.4478 30.2682 28.9861C33.7677 25.5496 38.9145 25.0284 42.2099 27.2684C46.3437 30.0776 47.3877 37.1107 43.0614 41.8793Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_4_86)">
                      <path
                        d="M25.7162 47.7113C25.7002 51.8776 24.0191 55.249 21.9614 55.241C19.9037 55.233 18.2488 51.849 18.2654 47.6827C18.2814 43.5164 19.9625 40.145 22.0202 40.153C24.0774 40.1604 25.7322 43.5444 25.7162 47.7113Z"
                        fill="#8481FF"
                      />
                      <path
                        d="M25.086 36.0433C25.0797 37.7278 23.7088 39.0878 22.0242 39.0816C20.3397 39.0753 18.9797 37.7044 18.986 36.0198C18.9923 34.3353 20.3631 32.9747 22.0477 32.9816C23.7323 32.9878 25.0928 34.3587 25.086 36.0433Z"
                        fill="#8481FF"
                      />
                      <path
                        d="M43.0391 47.7781C43.0231 51.9444 41.342 55.3158 39.2843 55.3078C37.2265 55.2998 35.5717 51.9158 35.5882 47.7496C35.6042 43.5833 37.2854 40.2118 39.3431 40.2198C41.4008 40.2278 43.0557 43.6118 43.0391 47.7781Z"
                        fill="#8481FF"
                      />
                      <path
                        d="M42.4094 36.1101C42.4031 37.7947 41.0317 39.1547 39.3471 39.1484C37.6625 39.1421 36.302 37.7713 36.3088 36.0867C36.3151 34.4021 37.686 33.0416 39.3705 33.0484C41.0557 33.0547 42.4157 34.4256 42.4094 36.1101Z"
                        fill="#8481FF"
                      />
                      <path
                        d="M34.354 53.845C34.338 58.0113 32.6568 61.3827 30.5991 61.3747C28.5414 61.3667 26.8865 57.9827 26.9031 53.8164C26.9191 49.6501 28.6002 46.2787 30.658 46.2867C32.7157 46.2947 34.3705 49.6787 34.354 53.845Z"
                        fill="#8481FF"
                      />
                      <path
                        d="M33.7242 42.177C33.718 43.8616 32.3471 45.2221 30.6625 45.2153C28.978 45.2084 27.618 43.8376 27.6242 42.153C27.6305 40.4684 29.002 39.1078 30.686 39.1147C32.3705 39.1216 33.7305 40.4924 33.7242 42.177Z"
                        fill="#8481FF"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_4_86">
                      <rect
                        width="60"
                        height="64"
                        fill="white"
                        transform="translate(0.16217)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="rounded-lg h-32 px-4 py-4 bg-neutral-800 shadow-lg hover:brightness-115 border-2 border-transparent flex justify-center items-center">
                <p className="text-md items-center font-semibold">
                  Soporte multirregión y multilingüe
                </p>
                <svg width="100" height="100" viewBox="0 0 65 60" fill="none">
                  <g clipPath="url(#clip0_4_73)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27.0235 0.976562C28.7907 0.976562 30.2235 2.40937 30.2235 4.17657C30.2235 5.94426 28.7907 7.37706 27.0235 7.37706C25.2563 7.37706 23.823 5.94426 23.823 4.17657C23.8235 2.40937 25.2563 0.976562 27.0235 0.976562Z"
                      fill="#0B29C6"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32.1976 24.9026C23.6131 18.8529 17.4632 8.78555 18.4996 1.25637C19.8689 4.88999 22.0841 9.87654 28.8889 11.411C31.244 7.25551 34.5795 3.01216 39.2778 1.25637C34.5194 7.18506 33.7212 15.2798 32.1976 24.9026Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.97675 20.3433C5.86035 18.8127 7.81755 18.2883 9.3481 19.1719C10.8786 20.0555 11.4025 22.0127 10.5194 23.5433C9.63585 25.0738 7.67864 25.5982 6.1481 24.7146C4.61756 23.831 4.09315 21.8738 4.97675 20.3433Z"
                      fill="#0B29C6"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.2842 27.8253C18.7531 32.2354 6.95976 32.5271 0.957153 27.865C4.78872 28.4961 10.2148 29.0711 14.9459 23.9451C12.5248 19.8273 10.518 14.8174 11.346 9.87058C14.1015 16.9557 20.7123 21.6947 28.2842 27.8253Z"
                      fill="#6981FF"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.6628 48.9319C9.77923 47.4014 10.3036 45.4442 11.8342 44.5606C13.3647 43.677 15.3219 44.2014 16.2055 45.7319C17.0891 47.2624 16.5647 49.2197 15.0342 50.1033C13.5036 50.9873 11.5464 50.4629 10.6628 48.9319Z"
                      fill="#0B29C6"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.7962 32.4879C27.8496 42.9472 22.2056 53.3062 15.1671 56.1743C17.6294 53.1713 20.8403 48.7598 18.767 42.0998C13.9903 42.1375 8.64806 41.3705 4.7783 38.1799C12.2916 39.3364 19.7012 35.9806 28.7962 32.4879Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M38.3957 58.5488C36.6285 58.5488 35.1957 57.116 35.1957 55.3488C35.1957 53.5811 36.6285 52.1488 38.3957 52.1488C40.1629 52.1488 41.5957 53.5816 41.5957 55.3488C41.5957 57.1165 40.1629 58.5488 38.3957 58.5488Z"
                      fill="#0B29C6"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M33.2216 34.6232C41.806 40.6724 47.9555 50.7398 46.9196 58.269C45.5503 54.6354 43.3351 49.6488 36.5307 48.1143C34.1751 52.2703 30.8397 56.5127 26.1414 58.269C30.8997 52.3403 31.6985 44.246 33.2216 34.6232Z"
                      fill="#6981FF"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M60.4424 39.6757C59.5588 41.2063 57.6016 41.7307 56.0711 40.8471C54.5405 39.9635 54.0156 38.0058 54.8992 36.4757C55.7833 34.9452 57.7405 34.4208 59.2706 35.3044C60.8016 36.188 61.326 38.1452 60.4424 39.6757Z"
                      fill="#0B29C6"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M37.135 32.1937C46.6666 27.7841 58.4599 27.4919 64.462 32.154C60.6305 31.5229 55.2043 30.9479 50.4738 36.0744C52.8949 40.1917 54.9017 45.202 54.0732 50.1484C51.3182 43.0633 44.7069 38.3243 37.135 32.1937Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M54.7568 10.5934C55.6404 12.124 55.116 14.0812 53.5855 14.9648C52.0549 15.8484 50.0977 15.324 49.2141 13.7934C48.3305 12.2629 48.855 10.3057 50.3855 9.42208C51.9155 8.53848 53.8728 9.06288 54.7568 10.5934Z"
                      fill="#0B29C6"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M36.623 27.0375C37.5696 16.5782 43.2135 6.21911 50.252 3.35152C47.7898 6.35456 44.5784 10.7661 46.6527 17.4261C51.4293 17.3879 56.7716 18.1554 60.6414 21.3459C53.1281 20.1895 45.7185 23.5452 36.623 27.0375Z"
                      fill="#6981FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_73">
                      <rect
                        width="64"
                        height="58.0465"
                        fill="white"
                        transform="translate(0.957153 0.976562)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="rounded-lg h-32 px-4 py-4 bg-neutral-800 shadow-lg hover:brightness-115 border-2 border-transparent flex justify-center items-center">
                <p className="text-md items-center font-semibold">
                  Alcance de fabricantes de dispositivos IoT
                </p>
                <svg width="100" height="100" viewBox="0 0 64 53" fill="none">
                  <g clipPath="url(#clip0_4_66)">
                    <path
                      d="M6.99092 2.9921C18.2897 -4.98815 26.981 5.52049 26.981 5.52049L51.3959 34.9921C51.3959 34.9921 52.9366 37.56 50.7243 39.5353C48.4724 41.5501 46.9317 40.1279 46.9317 40.1279C46.9317 40.1279 48.3539 43.2094 45.865 44.6711C43.3761 46.1328 41.6378 44.2365 41.6378 44.2365C41.6378 44.2365 43.0601 47.6341 40.6107 49.2143C38.1613 50.7946 35.6724 48.1476 35.6724 48.1476C35.6724 48.1476 36.6601 50.9921 34.3687 51.9402C32.0773 52.8884 30.3786 51.5452 30.3786 51.5452C26.665 48.9378 9.12425 31.239 9.12425 31.239C-0.831307 21.402 -4.18933 10.9328 6.99092 2.9921Z"
                      fill="white"
                    />
                    <path
                      d="M21.0156 18.8341L38.3983 4.13781C38.3983 4.13781 49.7761 -6.25231 60.7193 5.95509C69.0946 15.3576 57.3218 28.2366 50.1317 33.8069L37.8452 18.6761C37.8452 18.6761 28.4033 26.4193 23.544 22.9032C23.0699 22.5477 20.5415 19.2687 21.0156 18.8341Z"
                      fill="#001375"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M39.6473 31.6608C39.7853 31.5433 39.9923 31.5599 40.1098 31.6978L47.1419 39.9546C47.2594 40.0926 47.2428 40.2997 47.1049 40.4172C46.9669 40.5347 46.7598 40.5181 46.6423 40.3801L39.6102 32.1233C39.4927 31.9854 39.5093 31.7783 39.6473 31.6608Z"
                      fill="#0B29C6"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M34.3895 36.049C34.5258 35.9296 34.7331 35.9433 34.8525 36.0796L41.8451 44.0598C41.9645 44.1961 41.9508 44.4034 41.8145 44.5228C41.6782 44.6423 41.4709 44.6286 41.3515 44.4923L34.3589 36.5121C34.2395 36.3758 34.2532 36.1685 34.3895 36.049Z"
                      fill="#0B29C6"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.6603 40.2373C28.7962 40.1175 29.0035 40.1305 29.1234 40.2664L35.9184 47.9701C36.0383 48.106 36.0253 48.3133 35.8894 48.4332C35.7535 48.5531 35.5462 48.5401 35.4263 48.4042L28.6312 40.7005C28.5114 40.5646 28.5244 40.3572 28.6603 40.2373Z"
                      fill="#0B29C6"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M38.0815 18.4135C37.9366 18.3048 37.731 18.3342 37.6223 18.4792ZM37.8848 18.676C37.6879 18.9385 37.688 18.9386 37.6882 18.9388L37.6888 18.9392L37.6906 18.9406L37.6971 18.9454L37.7214 18.9633C37.7426 18.9787 37.7736 19.0011 37.814 19.0298C37.8949 19.0873 38.0137 19.1699 38.1674 19.2722C38.4746 19.4768 38.9214 19.7605 39.4833 20.0793C40.6063 20.7165 42.1941 21.4969 44.0503 22.0663C47.7605 23.2044 52.5893 23.5101 56.8942 20.0783C57.0359 19.9653 57.0592 19.7589 56.9463 19.6172C56.8333 19.4755 56.6269 19.4522 56.4852 19.5651C52.4148 22.8099 47.8411 22.5427 44.2427 21.4389C42.4445 20.8873 40.9014 20.1294 39.8072 19.5086C39.2605 19.1984 38.8271 18.9231 38.5312 18.726C38.3832 18.6275 38.2698 18.5486 38.1938 18.4947C38.1559 18.4677 38.1273 18.447 38.1084 18.4333L38.0876 18.418L38.0827 18.4144L38.0815 18.4135M37.8848 18.676L37.6879 18.9385C37.5429 18.8298 37.5135 18.6241 37.6223 18.4792"
                      fill="#3051FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_66">
                      <rect width="64" height="52.5432" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="rounded-lg h-32 px-4 py-4 bg-neutral-800 shadow-lg hover:brightness-115 border-2 border-transparent flex justify-center items-center">
                <p className="text-md items-center font-semibold">
                  IoT corporativo e individual
                </p>
                <svg width="100" height="100" viewBox="0 0 67 64" fill="none">
                  <g clipPath="url(#clip0_4_56)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.3538 13.504C16.0782 16.301 23.5147 27.8533 27.5437 30.2884C32.9988 33.5853 36.729 30.778 41.4364 27.1258C48.2252 21.8581 54.489 19.1961 57.145 18.6457C61.7984 17.6806 65.3737 21.3719 65.823 25.1781C66.5197 31.0833 64.7026 36.2862 61.9061 41.5994C59.6306 45.923 43.9411 63.3484 32.5214 64.5312C27.4715 65.0542 24.3445 62.6341 19.3915 58.4768C13.0477 53.1525 9.81914 49.556 5.53114 42.182C2.81806 37.5158 0.575034 30.6687 0.0600071 25.2463C-0.37675 20.6457 1.39103 7.60568 11.3538 13.504Z"
                      fill="#001375"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M43.5305 58.9616C39.7958 61.467 35.9645 63.3002 32.5214 63.6569C28.6369 64.0592 25.8903 62.7201 22.5751 60.1884C23.1301 53.3893 23.055 41.5312 20.4129 36.5883C20.1754 36.1441 19.9361 35.6987 19.6962 35.252C17.3792 30.9384 14.9962 26.502 13.4974 21.8305C13.4719 21.7509 13.4458 21.6701 13.4193 21.5879C12.8678 19.8792 12.1419 17.6299 13.0092 15.9356C13.3897 15.1924 13.8333 14.9679 14.2959 15.047C16.1364 16.8688 18.1484 19.2838 20.1068 21.6343C20.1398 21.674 20.1728 21.7136 20.2058 21.7532C21.8012 23.922 23.4954 26.1094 25.5167 27.7587C26.2555 28.476 26.9381 29.048 27.5437 29.4141C32.5567 32.4438 36.113 30.3186 40.3097 27.12C41.3586 26.4318 42.4752 25.7094 43.7193 25.0266C43.8986 24.9281 44.1178 24.8008 44.3684 24.6552C46.3351 23.5126 50.2336 21.2477 51.9221 23.0304C53.2103 24.39 50.9911 26.5947 48.6407 28.9298C47.2844 30.2772 45.8845 31.668 45.0896 32.9648C43.6371 35.3347 42.3947 38.0781 41.8447 40.1295C40.1994 46.2641 41.6911 51.9483 43.208 57.7283C43.3157 58.1389 43.4236 58.5499 43.5305 58.9616Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.9528 0.276535C25.2535 0.276535 27.9329 2.93331 27.9329 6.2053C27.9329 9.47816 25.2531 12.1345 21.9528 12.1345C18.6516 12.1345 15.9722 9.47773 15.9722 6.2053C15.9718 2.93331 18.6516 0.276535 21.9528 0.276535Z"
                      fill="#001375"
                    />
                    <path
                      d="M48.9283 16.9593C52.2313 16.9593 54.9089 14.3047 54.9089 11.0301C54.9089 7.75551 52.2313 5.10092 48.9283 5.10092C45.6254 5.10092 42.9478 7.75551 42.9478 11.0301C42.9478 14.3047 45.6254 16.9593 48.9283 16.9593Z"
                      fill="#001375"
                    />
                    <path
                      d="M34.3061 24.6604C37.0666 24.6604 39.3045 22.4418 39.3045 19.7049C39.3045 16.968 37.0666 14.7493 34.3061 14.7493C31.5455 14.7493 29.3076 16.968 29.3076 19.7049C29.3076 22.4418 31.5455 24.6604 34.3061 24.6604Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_56">
                      <rect width="66.1622" height="64" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <button
                className="group/item rounded-lg justify-center gap-x-4 lg:gap-x-0 w-full px-4 py-4 shadow-lg hover:brightness-115 hover:bg-black/50 lg:border-2 hover:border-transparent flex lg:justify-between hover:brightness-125 transition-all text-white items-center col-span-1 min-[440px]:col-span-2 sm:col-span-3 lg:col-span-1 lg:h-32"
                onClick={togglePopup}
              >
                <p className="text-xl w-fit font-semibold">
                  Contact us for cooperation
                </p>
                <div className="rounded-full group-hover/item:bg-white transition-all duration-500 bg-black px-3 py-3">
                  <svg
                    className="group/edit group-hover/item:text-black duration-500 group-hover/item:rotate-45 rotate-90 transition-all"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M18 11l-6 -6" />
                    <path d="M6 11l6 -6" />
                  </svg>
                </div>
              </button>
              <ContactPopup isOpen={isPopupOpen} togglePopup={togglePopup} />
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
