import { Tag } from "@/components/ui/tag";
import {
  BotMessageSquare,
  CalendarDays,
  CircleCheckBig,
  LayoutDashboard,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlurDot } from "../ui/blur-dot";

export const HeroSection = () => {
  return (
    <main className="max-w-[1440px] w-full min-h-screen flex flex-col justify-center items-center gap-10 mx-auto pt-36 relative">
      <div className="flex flex-col justify-center items-center gap-8">
        <Tag>
          <CircleCheckBig size={18} className="text-primary" /> 15+ clínicas de
          todo o Brasil confiam no nosso trabalho
        </Tag>
        <h1 className="text-6xl text-center font-bold group">
          O{" "}
          <span
            className="relative after:w-full after:h-4 after:absolute after:bottom-1.5 after:left-0
            after:right-0 after:-z-10 after:bg-primary/20 group-hover:after:bg-primary/60 group-hover:after:h-14 after:duration-300"
          >
            Futuro
          </span>{" "}
          da sua clínica <span className="text-primary">começa aqui</span>.
        </h1>
        <p className="max-w-[710px] w-full text-xl text-center text-zinc-600">
          Reduza o tempo em tarefas administrativas e ofereça um atendimento
          mais ágil. O ChatLife facilita a gestão da sua clínica com tecnologia
          moderna e segura.
        </p>
        <div className="flex items-center gap-8">
          <Tag>
            <BotMessageSquare size={18} className="text-primary" /> Chatbot
          </Tag>
          <Tag>
            <LayoutDashboard size={18} className="text-primary" /> Dashboard
          </Tag>
          <Tag>
            <CalendarDays size={18} className="text-primary" /> Agenda
          </Tag>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Link
          href="#"
          className="py-3 px-8 rounded-3xl font-medium text-gray-100 bg-primary hover:opacity-60 duration-300"
        >
          Saiba Mais
        </Link>
        <Link
          href="#"
          className="py-3 px-8 rounded-3xl font-medium text-gray-100 bg-primary hover:opacity-60 duration-300"
        >
          Crie uma conta
        </Link>
      </div>
      <Image
        src="/dashboard-demo.png"
        alt=""
        width={3000}
        height={3000}
        className="w-full mt-14 rounded-t-3xl border-4 border-primary"
      />
      <BlurDot className="right-[-300px]" />
      <BlurDot className="top-[-300px] left-[-800px]" />
    </main>
  );
};
