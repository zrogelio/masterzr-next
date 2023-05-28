import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-5.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffects from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null, value);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInview = useInView(ref);

  useEffect(() => {
    if (isInview) {
      motionValue.set(value);
    }
  }, [isInview, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>CodeBucks About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffects />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-14">
          <AnimatedText
            text="mi pasion por la web!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3  flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biografia
              </h2>
              <p className="font-medium">
                Hola, soy ZMasterWeb, un desarrollador web y diseñador UI/UX con
                una pasión por crear experiencias digitales impactantes,
                intuitivas y centradas en el usuario. Con amplia experiencia en
                el campo, estoy constantemente buscando nuevas y creativas
                formas de convertir las ideas de mis clientes en realidad.
              </p>
              <p className="my-4 font-medium">
                El diseño es una poderosa herramienta para transmitir mensajes,
                emociones y valores. Creo en utilizar el diseño para contar
                historias impactantes y conectar de manera significativa con el
                público objetivo.
              </p>
              <p className="font-medium">
                Cuando trabajo en un proyecto, ya sea un sitio web, una
                aplicación móvil u otro producto digital, mi enfoque está en
                brindar una experiencia excepcional al usuario a través de un
                diseño cuidadosamente elaborado. Estoy emocionado de poner mis
                habilidades y pasión en acción para impulsar el éxito de su
                próximo proyecto.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
        bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
                     "
            >
     <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={profilePic}
                alt="codebocks"
                clasName="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className=" flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} /> +
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                  xs:text-sm
                    "
                >
                  satified clients
                </h2>
              </div>
              <div className="col-span-2 flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={40} /> +
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 l:text-center md:text-lg sm:text-base
                  xs:text-sm
                    "
                >
                  project completed
                </h2>
              </div>
              <div className="col-span-2 flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 l:text-center md:text-lg sm:text-base
                  xs:text-sm
                    "
                >
                  years of expereience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
