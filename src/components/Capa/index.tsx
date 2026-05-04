"use client";

import { ReactElement, useEffect, useRef, useState } from "react";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import styles from "./capa.module.css";
import ThemeToggle from "../ThemeToggle/theme-toggle";

type CapaPost = {
  slug: string;
  title: string;
  date: string;
};

type NameMotion = {
  x: number | string;
  y: number | string;
  scale: number;
  subtitleOpacity: number;
  scrollCueOpacity: number;
  imageDisplay: "none" | "block";
};

type PortfolioSection = {
  id: string;
  title: string;
  description: string;
  svgs?: ReactElement[];
  tags?: string[];
  projects?: {
    title: string;
    description: string;
    stacks: string[];
    link: string;
  }[];
};

const sections: PortfolioSection[] = [
  {
    id: "sobre",
    title: "Sobre mim",
    description:
      "Primeiramente seja bem vindo ao meu Portifólio, aqui você irá conhecer um pouco mais sobre mim, meus trabalhos, minha experiência e o melhor como eu desenvolvo, porque para você um curioso, um recruiter ou um possível cliente nada melhor do que entender um pouco mais sobre a pessoa por trás dos códigos, certo? Então vamos lá!",
    tags: [
      "Calmo",
      "Visão de Produto",
      "Comprometimento",
      "SOLID",
      "Comunicativo",
      "Acessibilidade",
      "Autodidata",
      "Instrutor de IA",
    ],
  },
  {
    id: "projetos",
    title: "Projetos",
    description:
      "Colecao de trabalhos em web apps e experiencias interativas, priorizando clareza, identidade e resultados de negocio.",
    projects: [
      {
        title: "Memoria & Ancestralidade",
        description:
          "Site institucional para o projeto de pesquisa Memória & Ancestralidade, que tem como objetivo preservar e compartilhar as histórias e tradições das comunidades indígenas brasileiras.",
        stacks: ["React", "TypeScript", "Next.js"],
        link: "http://memoriaeancestralidade.com.br",
      },
      {
        title: "Micro-Sass",
        description:
          "Uma coleção de Sass feita para demonstrar minhas habilidades e de quebra tirar um extra.",
        stacks: ["React", "TypeScript", "Next.js", "Sass", "Node.js"],
        link: "https://github.com/cayof31/micro-sass",
      },
      {
        title: "AlertaUFMT",
        description:
          "Sistema de monitoramento de infraestrutura universitária utilizando Geoprocessamento (PostGIS), React Native e Crowdsourcing. TCC Bacharelado em Ciência da Computação - UFMT.",
        stacks: [
          "ReactNative",
          "TypeScript",
          "PrismaORM",
          "JavaScript",
          "swagger",
          "Node.js",
        ],
        link: "https://github.com/cayof31/tcc",
      },
    ],
  },
  {
    id: "experiencia",
    title: "Experiencia",
    description:
      "Atuacao em squads multidisciplinares, participando de discovery, arquitetura frontend, implementacao e melhoria continua.",
    svgs: [
      <svg viewBox="0 0 128 128">
        <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
        <path
          data-name="original"
          fill="#000000"
          d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
        ></path>
      </svg>,
      <svg viewBox="0 0 128 128">
        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
        <path
          fill="#323330"
          d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
        ></path>
      </svg>,
      <svg viewBox="0 0 128 128">
        <path
          fill="#0074BD"
          d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
        ></path>
        <path
          fill="#EA2D2E"
          d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
        ></path>
        <path
          fill="#0074BD"
          d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
        ></path>
        <path
          fill="#EA2D2E"
          d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
        ></path>
        <path
          fill="#0074BD"
          d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
        ></path>
      </svg>,
      <svg viewBox="0 0 128 128">
        <path
          fill="url(#a)"
          d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"
        ></path>
        <path
          fill="url(#b)"
          d="M116.897 29.76 66.841.825A8.161 8.161 0 0 0 65.302.23L9.21 96.798a6.251 6.251 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.702 3.702 0 0 0-1.302-1.072z"
        ></path>
        <path
          fill="url(#c)"
          d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"
        ></path>
        <defs>
          <linearGradient
            id="a"
            x1="34.513"
            x2="27.157"
            y1="15.535"
            y2="30.448"
            gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3F873F"></stop>
            <stop offset=".33" stopColor="#3F8B3D"></stop>
            <stop offset=".637" stopColor="#3E9638"></stop>
            <stop offset=".934" stopColor="#3DA92E"></stop>
            <stop offset="1" stopColor="#3DAE2B"></stop>
          </linearGradient>
          <linearGradient
            id="b"
            x1="30.009"
            x2="50.533"
            y1="23.359"
            y2="8.288"
            gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".138" stopColor="#3F873F"></stop>
            <stop offset=".402" stopColor="#52A044"></stop>
            <stop offset=".713" stopColor="#64B749"></stop>
            <stop offset=".908" stopColor="#6ABF4B"></stop>
          </linearGradient>
          <linearGradient
            id="c"
            x1="21.917"
            x2="40.555"
            y1="22.261"
            y2="22.261"
            gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".092" stopColor="#6ABF4B"></stop>
            <stop offset=".287" stopColor="#64B749"></stop>
            <stop offset=".598" stopColor="#52A044"></stop>
            <stop offset=".862" stopColor="#3F873F"></stop>
          </linearGradient>
        </defs>
      </svg>,
      <svg viewBox="0 0 128 128">
        <path
          fill="#E44D26"
          d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
        ></path>
        <path
          fill="#F16529"
          d="M64 116.8l36.378-10.086 8.559-95.878H64z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
        ></path>
        <path
          fill="#fff"
          d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
        ></path>
      </svg>,
      <svg viewBox="0 0 128 128">
        <path
          fill="#1572B6"
          d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
        ></path>
        <path
          fill="#33A9DC"
          d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
        ></path>
        <path
          fill="#fff"
          d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
        ></path>
        <path
          fill="#fff"
          d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
        ></path>
      </svg>,
      <svg viewBox="0 0 128 128">
        <path
          fill="#38bdf8"
          d="M13.227 56.074c-3.528 0-5.727 1.778-6.602 5.301 1.324-1.773 2.875-2.426 4.625-1.977 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.977-1-.25-1.722-.977-2.523-1.801-1.301-1.324-2.801-2.852-6.074-2.852zM6.602 64C3.074 64 .875 65.773 0 69.3c1.324-1.777 2.875-2.425 4.625-1.976 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.972-1-.25-1.722-.972-2.523-1.796C11.398 65.523 9.898 64 6.602 64zm0 0"
        ></path>
        <path
          fill="#fff"
          d="M39.676 62.75h-2.301v4.477c0 1.199.773 1.171 2.3 1.097v1.801c-3.1.375-4.323-.477-4.323-2.898V62.75h-1.704v-1.926h1.704v-2.5l2-.597v3.097h2.296v1.926zm8.8-1.926h2v9.301h-2v-1.352c-.703.977-1.8 1.579-3.25 1.579-2.527 0-4.624-2.153-4.624-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.546.597 3.25 1.574zm-2.953 7.625c1.676 0 2.954-1.25 2.954-2.972 0-1.727-1.278-2.977-2.954-2.977-1.671 0-2.949 1.25-2.949 2.977.028 1.722 1.278 2.972 2.95 2.972zm8.301-9.023c-.699 0-1.273-.602-1.273-1.278 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.579 1.278-1.278 1.278zm-1 10.699v-9.3h2v9.3zm4.324 0V56.551h2v13.574zm15.079-9.3h2.125l-2.926 9.3h-1.977l-1.926-6.273-1.949 6.273h-1.972l-2.926-9.3H62.8l1.8 6.425 1.95-6.426h1.926l1.921 6.426zm4.597-1.4c-.699 0-1.273-.6-1.273-1.277 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.551 1.278-1.278 1.278zm-1 10.7v-9.3h2v9.3zm9.227-9.55c2.074 0 3.574 1.425 3.574 3.823v5.727h-2v-5.5c0-1.426-.824-2.148-2.074-2.148-1.324 0-2.375.773-2.375 2.671v5h-2v-9.296h2v1.199c.625-1 1.625-1.477 2.875-1.477zm13.125-3.473h2v13.023h-2v-1.352c-.7.977-1.801 1.579-3.25 1.579-2.528 0-4.625-2.153-4.625-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.55.597 3.25 1.574zm-2.95 11.347c1.672 0 2.95-1.25 2.95-2.972 0-1.727-1.278-2.977-2.95-2.977-1.675 0-2.953 1.25-2.953 2.977 0 1.722 1.278 2.972 2.954 2.972zm11.672 1.926c-2.796 0-4.921-2.148-4.921-4.898 0-2.778 2.097-4.903 4.921-4.903 1.829 0 3.403.95 4.153 2.403l-1.727 1c-.398-.875-1.324-1.426-2.449-1.426-1.648 0-2.875 1.25-2.875 2.926 0 1.671 1.25 2.921 2.875 2.921 1.125 0 2.023-.574 2.477-1.421l1.722.972c-.75 1.477-2.347 2.426-4.176 2.426zm7.528-7c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.801-2.176l1.727-1c.296.852 1.046 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.398-2.848 1.528 0 2.801.699 3.454 1.921l-1.704.954c-.324-.727-.972-1.051-1.75-1.051-.722-.028-1.347.3-1.347.949zm8.574 0c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.8-2.176l1.726-1c.3.852 1.05 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.403-2.848 1.523 0 2.796.699 3.449 1.921l-1.7.954c-.328-.727-.976-1.051-1.75-1.051-.726-.028-1.351.3-1.351.949zm0 0"
        ></path>
      </svg>,
      <svg viewBox="0 0 128 128">
        <path
          fill="#252f3e"
          d="M36.379 53.64c0 1.56.168 2.825.465 3.75.336.926.758 1.938 1.347 3.032.207.336.293.672.293.969 0 .418-.254.84-.8 1.261l-2.653 1.77c-.379.25-.758.379-1.093.379-.422 0-.844-.211-1.266-.59a13.28 13.28 0 0 1-1.516-1.98 34.153 34.153 0 0 1-1.304-2.485c-3.282 3.875-7.41 5.813-12.38 5.813-3.535 0-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086 0-3.578 1.262-6.484 3.833-8.671 2.566-2.192 5.976-3.286 10.316-3.286 1.43 0 2.902.125 4.46.336 1.56.211 3.161.547 4.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061 32.633 23.788 32 20.546 32c-1.473 0-2.988.168-4.547.547a33.416 33.416 0 0 0-4.547 1.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59 0-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586 1.18-.883 1.472-.758 3.242-1.39 5.304-1.895 2.063-.547 4.254-.8 6.57-.8 5.008 0 8.672 1.136 11.032 3.41 2.316 2.273 3.492 5.726 3.492 10.359v13.64Zm-17.094 6.403c1.387 0 2.82-.254 4.336-.758 1.516-.508 2.863-1.433 4-2.695.672-.8 1.18-1.684 1.43-2.695.254-1.012.422-2.23.422-3.665v-1.765a34.401 34.401 0 0 0-3.871-.719 31.816 31.816 0 0 0-3.961-.25c-2.82 0-4.883.547-6.274 1.684-1.387 1.136-2.062 2.734-2.062 4.84 0 1.98.504 3.453 1.558 4.464 1.012 1.051 2.485 1.559 4.422 1.559Zm33.809 4.547c-.758 0-1.262-.125-1.598-.422-.34-.254-.633-.84-.887-1.64L40.715 29.98c-.25-.843-.38-1.39-.38-1.687 0-.672.337-1.05 1.013-1.05h4.125c.8 0 1.347.124 1.644.421.336.25.59.84.84 1.64l7.074 27.876 6.57-27.875c.208-.84.462-1.39.797-1.64.34-.255.93-.423 1.688-.423h3.367c.8 0 1.348.125 1.684.422.336.25.633.84.8 1.64l6.653 28.212 7.285-28.211c.25-.84.547-1.39.84-1.64.336-.255.887-.423 1.644-.423h3.914c.676 0 1.055.336 1.055 1.051 0 .21-.043.422-.086.676-.043.254-.125.59-.293 1.05L80.801 62.57c-.254.84-.547 1.387-.887 1.64-.336.255-.883.423-1.598.423h-3.62c-.801 0-1.348-.13-1.684-.422-.34-.297-.633-.844-.801-1.684l-6.527-27.16-6.485 27.117c-.21.844-.46 1.391-.8 1.684-.337.297-.926.422-1.684.422Zm54.105 1.137c-2.187 0-4.379-.254-6.484-.758-2.106-.504-3.746-1.055-4.84-1.684-.676-.379-1.137-.8-1.305-1.18a2.919 2.919 0 0 1-.254-1.18v-2.148c0-.882.336-1.304.97-1.304.25 0 .503.043.757.129.25.082.629.25 1.05.418a23.102 23.102 0 0 0 4.634 1.476c1.683.336 3.324.504 5.011.504 2.653 0 4.715-.465 6.145-1.39 1.433-.926 2.191-2.274 2.191-4 0-1.18-.379-2.145-1.136-2.946-.758-.8-2.192-1.516-4.254-2.191l-6.106-1.895c-3.074-.969-5.348-2.398-6.734-4.293-1.39-1.855-2.106-3.918-2.106-6.105 0-1.77.38-3.328 1.137-4.676a10.829 10.829 0 0 1 3.031-3.453c1.262-.965 2.696-1.684 4.38-2.188 1.683-.504 3.452-.715 5.304-.715.926 0 1.894.043 2.82.168.969.125 1.852.293 2.738.461.84.211 1.641.422 2.399.676.758.254 1.348.504 1.77.758.59.336 1.011.672 1.261 1.05.254.34.379.802.379 1.391v1.98c0 .884-.336 1.348-.969 1.348-.336 0-.883-.171-1.597-.507-2.403-1.094-5.098-1.641-8.086-1.641-2.399 0-4.293.379-5.598 1.18-1.309.797-1.98 2.02-1.98 3.746 0 1.18.421 2.191 1.261 2.988.844.8 2.403 1.602 4.633 2.316l5.98 1.895c3.032.969 5.22 2.316 6.524 4.043 1.305 1.727 1.938 3.707 1.938 5.895 0 1.812-.38 3.453-1.094 4.882-.758 1.434-1.77 2.696-3.074 3.707-1.305 1.051-2.864 1.809-4.672 2.36-1.895.586-3.875.883-6.024.883Zm0 0"
        ></path>{" "}
        <path
          fill="#f90"
          d="M118 73.348c-4.432.063-9.664 1.052-13.621 3.832-1.223.883-1.012 2.062.336 1.894 4.508-.547 14.44-1.726 16.21.547 1.77 2.23-1.976 11.62-3.663 15.79-.504 1.26.59 1.769 1.726.8 7.41-6.231 9.348-19.242 7.832-21.137-.757-.925-4.388-1.79-8.82-1.726zM1.63 75.859c-.927.116-1.347 1.236-.368 2.121 16.508 14.902 38.359 23.872 62.613 23.872 17.305 0 37.43-5.43 51.281-15.66 2.273-1.688.297-4.254-2.02-3.204-15.534 6.57-32.421 9.77-47.788 9.77-22.778 0-44.8-6.273-62.653-16.633-.39-.231-.755-.304-1.064-.266z"
        ></path>
      </svg>,
      <svg viewBox="0 0 128 128">
        <g fill="#61DAFB">
          <circle cx="64" cy="64" r="11.4"></circle>
          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
        </g>
      </svg>,
      <svg viewBox="0 0 128 128">
        <path
          fill="#FFF"
          d="m115.679 69.288-15.591-8.94-2.689-1.163-63.781.436v32.381h82.061z"
        ></path>
        <path
          fill="#F38020"
          d="M87.295 89.022c.763-2.617.472-5.015-.8-6.796-1.163-1.635-3.125-2.58-5.488-2.689l-44.737-.581c-.291 0-.545-.145-.691-.363s-.182-.509-.109-.8c.145-.436.581-.763 1.054-.8l45.137-.581c5.342-.254 11.157-4.579 13.192-9.885l2.58-6.723c.109-.291.145-.581.073-.872-2.906-13.158-14.644-22.97-28.672-22.97-12.938 0-23.913 8.359-27.838 19.952a13.35 13.35 0 0 0-9.267-2.58c-6.215.618-11.193 5.597-11.811 11.811-.145 1.599-.036 3.162.327 4.615C10.104 70.051 2 78.337 2 88.549c0 .909.073 1.817.182 2.726a.895.895 0 0 0 .872.763h82.57c.472 0 .909-.327 1.054-.8l.617-2.216z"
        ></path>
        <path
          fill="#FAAE40"
          d="M101.542 60.275c-.4 0-.836 0-1.236.036-.291 0-.545.218-.654.509l-1.744 6.069c-.763 2.617-.472 5.015.8 6.796 1.163 1.635 3.125 2.58 5.488 2.689l9.522.581c.291 0 .545.145.691.363.145.218.182.545.109.8-.145.436-.581.763-1.054.8l-9.924.582c-5.379.254-11.157 4.579-13.192 9.885l-.727 1.853c-.145.363.109.727.509.727h34.089c.4 0 .763-.254.872-.654.581-2.108.909-4.325.909-6.614 0-13.447-10.975-24.422-24.458-24.422"
        ></path>
      </svg>,
      <svg viewBox="0 0 128 128">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#3A4D54"
          d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z"
        ></path>
        <path
          fill="#00AADA"
          d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"
        ></path>
        <path
          fill="#28B8EB"
          d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z"
        ></path>
        <path
          fill="#028BB8"
          d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26H18.7v-.1z"
        ></path>
        <path
          fill="#019BC6"
          d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1H23.5z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#00ACD3"
          d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3-12h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#23C2EE"
          d="M39.6 52.7h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#00ACD3"
          d="M50.9 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#23C2EE"
          d="M50.9 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3.1 10.4H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#00ACD3"
          d="M62.2 41.5H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#23C2EE"
          d="M62.2 30.2H72V40h-9.8v-9.8zm.8.8h.8v8.1H63V31zm1.5 0h.8v8.1h-.8V31zm1.4 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#00ACD3"
          d="M73.5 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#D4EEF1"
          d="M48.8 78.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#3A4D54"
          d="M48.8 79.1c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .8-1.9 1.9-1.9M1.1 72.8h125.4c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.9 4.5-7.6 5.2"
        ></path>
        <path
          fill="#BFDBE0"
          d="M56 97.8c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6 6 13.6 10.7 27.5 10.8H56z"
        ></path>
        <path
          fill="#D4EEF1"
          d="M46.1 89.9c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.3 1.2 5.7 2.4 11.4 2.9z"
        ></path>
      </svg>,
      <svg viewBox="0 0 128 128">
        <linearGradient
          id="python-original-a"
          gradientUnits="userSpaceOnUse"
          x1="70.252"
          y1="1237.476"
          x2="170.659"
          y2="1151.089"
          gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
        >
          <stop offset="0" stopColor="#5A9FD4"></stop>
          <stop offset="1" stopColor="#306998"></stop>
        </linearGradient>
        <linearGradient
          id="python-original-b"
          gradientUnits="userSpaceOnUse"
          x1="209.474"
          y1="1098.811"
          x2="173.62"
          y2="1149.537"
          gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
        >
          <stop offset="0" stopColor="#FFD43B"></stop>
          <stop offset="1" stopColor="#FFE873"></stop>
        </linearGradient>
        <path
          fill="url(#python-original-a)"
          d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
          transform="translate(0 10.26)"
        ></path>
        <path
          fill="url(#python-original-b)"
          d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
          transform="translate(0 10.26)"
        ></path>
        <radialGradient
          id="python-original-c"
          cx="1825.678"
          cy="444.45"
          r="26.743"
          gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"></stop>
          <stop offset="1" stopColor="#7F7F7F" stopOpacity="0"></stop>
        </radialGradient>
        <path
          opacity=".444"
          fill="url(#python-original-c)"
          d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
        ></path>
      </svg>,
      <svg viewBox="0 0 128 128">
        <path
          fill="#85ea2d"
          d="M63.999 124.945c-33.607 0-60.95-27.34-60.95-60.949C3.05 30.388 30.392 3.048 64 3.048s60.95 27.342 60.95 60.95c0 33.607-27.343 60.946-60.95 60.946z"
        ></path>
        <path
          fill="#173647"
          d="M40.3 43.311c-.198 2.19.072 4.454-.073 6.668-.173 2.217-.444 4.407-.888 6.596-.615 3.126-2.56 5.489-5.24 7.458 5.218 3.396 5.807 8.662 6.152 14.003.172 2.88.098 5.785.394 8.638.221 2.215 1.082 2.782 3.372 2.854.935.025 1.894 0 2.978 0v6.842c-6.768 1.156-12.354-.762-13.734-6.496a39.329 39.329 0 0 1-.836-6.4c-.148-2.287.097-4.577-.074-6.864-.492-6.277-1.305-8.393-7.308-8.689v-7.8c.441-.1.86-.174 1.302-.223 3.298-.172 4.701-1.182 5.414-4.43a37.512 37.512 0 0 0 .616-5.536c.247-3.569.148-7.21.763-10.754.86-5.094 4.01-7.556 9.254-7.852 1.476-.074 2.978 0 4.676 0v6.99c-.714.05-1.33.147-1.969.147-4.258-.148-4.48 1.304-4.8 4.848zm8.195 16.193h-.099c-2.462-.123-4.578 1.796-4.702 4.258-.122 2.485 1.797 4.603 4.259 4.724h.295c2.436.148 4.527-1.724 4.676-4.16v-.245c.05-2.486-1.944-4.527-4.43-4.577zm15.43 0c-2.386-.074-4.38 1.796-4.454 4.159 0 .149 0 .271.024.418 0 2.684 1.821 4.406 4.578 4.406 2.707 0 4.406-1.772 4.406-4.553-.025-2.682-1.823-4.455-4.554-4.43Zm15.801 0a4.596 4.596 0 0 0-4.676 4.454 4.515 4.515 0 0 0 4.528 4.528h.05c2.264.394 4.553-1.796 4.701-4.429.122-2.437-2.092-4.553-4.604-4.553Zm21.682.369c-2.855-.123-4.284-1.083-4.996-3.79a27.444 27.444 0 0 1-.811-5.292c-.198-3.298-.174-6.62-.395-9.918-.516-7.826-6.177-10.557-14.397-9.205v6.792c1.304 0 2.313 0 3.322.025 1.748.024 3.077.69 3.249 2.634.172 1.772.172 3.568.344 5.365.346 3.57.542 7.187 1.157 10.706.542 2.904 2.536 5.07 5.02 6.841-4.355 2.929-5.636 7.113-5.857 11.814-.122 3.223-.196 6.472-.368 9.721-.148 2.953-1.181 3.913-4.16 3.987-.835.024-1.648.098-2.583.148v6.964c1.748 0 3.347.1 4.946 0 4.971-.295 7.974-2.706 8.96-7.531.417-2.658.662-5.34.737-8.023.171-2.46.148-4.946.394-7.382.369-3.815 2.116-5.389 5.93-5.636a5.161 5.161 0 0 0 1.06-.245v-7.801c-.64-.074-1.084-.148-1.552-.173zM64 6.1c31.977 0 57.9 25.92 57.9 57.898 0 31.977-25.923 57.899-57.9 57.899-31.976 0-57.898-25.922-57.898-57.9C6.102 32.023 32.024 6.101 64 6.101m0-6.1C28.71 0 0 28.71 0 64c0 35.288 28.71 63.998 64 63.998 35.289 0 64-28.71 64-64S99.289.002 64 .002Z"
        ></path>
      </svg>,
    ],
  },
  {
    id: "contato",
    title: "Contato",
    description:
      "Estou sempre aberto a novas oportunidades e parcerias. Se você tem um projeto em mente ou gostaria de discutir como posso ajudar a impulsionar seu negócio, não hesite em entrar em contato comigo. Vamos conversar sobre como podemos colaborar para alcançar seus objetivos!                     ",
    tags: ["Freelance", "Remoto", "Parcerias"],
  },
];

const Capa = ({ posts }: { posts: CapaPost[] }) => {
  const [nameMotion, setNameMotion] = useState<NameMotion>({
    x: "50%",
    y: "50svh",
    scale: 1,
    subtitleOpacity: 1,
    scrollCueOpacity: 1,
    imageDisplay: "none",
  });
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const headerAnchorRef = useRef<HTMLSpanElement | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const runScrollFrame = () => {
      rafRef.current = null;

      const scrollY =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      const viewportHeight =
        window.visualViewport?.height ?? window.innerHeight;
      const viewportWidth = window.visualViewport?.width ?? window.innerWidth;

      if (viewportHeight <= 0 || viewportWidth <= 0) return;

      const parentRect = rootRef.current?.getBoundingClientRect();
      if (!parentRect) return;

      const introDistance = Math.max(viewportHeight * 0.9, 360);
      const rawProgress = Math.min(scrollY / introDistance, 1);
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);

      const startX = parentRect.width / 2;
      const startY = viewportHeight * 0.5;
      const anchorRect = headerAnchorRef.current?.getBoundingClientRect();
      const layerLeft = Math.max((viewportWidth - parentRect.width) / 2, 0);
      const endX = anchorRect
        ? anchorRect.left - layerLeft
        : Math.min(Math.max(parentRect.width * 0.08, 56), 140);
      const endY = anchorRect
        ? anchorRect.top + anchorRect.height / 2
        : Math.min(Math.max(viewportHeight * 0.08, 34), 56);
      const compactScale = viewportWidth < 420 ? 0.32 : 0.22;
      const subtitleOpacity = 1 - Math.min(rawProgress * 2.2, 1);

      setNameMotion({
        x: startX + (endX - startX) * easedProgress,
        y: startY + (endY - startY) * easedProgress,
        scale: 1 - easedProgress * (1 - compactScale),
        subtitleOpacity,
        scrollCueOpacity: 1 - Math.min(scrollY / (viewportHeight * 0.22), 1),
        imageDisplay: subtitleOpacity <= 0.02 ? "block" : "none",
      });
    };

    const handleScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(runScrollFrame);
    };

    runScrollFrame();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -12% 0px",
        threshold: [0.05, 0.12],
      },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
      observer.disconnect();
    };
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div
      ref={rootRef}
      className="relative isolate mx-auto w-full max-w-5xl overflow-x-clip"
    >
      <div className="pointer-events-none fixed left-1/2 top-0 z-30 h-full w-full max-w-5xl -translate-x-1/2 will-change-transform">
        <span
          ref={headerAnchorRef}
          aria-hidden="true"
          className="absolute left-[clamp(7.1rem,8vw,2.2rem)] top-10 h-1 w-1 md:top-12"
        />
        <div
          className="absolute left-0 top-0 w-[min(1024px,92vw)] -translate-x-1/2 -translate-y-1/2"
          style={{
            transform: `translate3d(${typeof nameMotion.x === "number" ? `${nameMotion.x}px` : nameMotion.x}, ${typeof nameMotion.y === "number" ? `${nameMotion.y}px` : nameMotion.y}, 0) scale(${nameMotion.scale})`,
          }}
        >
          <h1 className="justify-center flex-nowrap text-balance text-center text-[clamp(3.4rem,14vw,12rem)] leading-[0.88] tracking-[0.11em] text-[--portfolio-text] uppercase [text-shadow:0_1px_0_rgba(255,255,255,0.18),0_14px_46px_rgba(0,0,0,0.28)] gap-8 flex">
            CAYO <span style={{ display: nameMotion.imageDisplay }}> | </span>{" "}
            <span
              className="text-nowrap"
              style={{ display: nameMotion.imageDisplay }}
            >
              FULL-STACK
            </span>
          </h1>
          <p
            className="mt-5 text-center text-[clamp(0.9rem,1.8vw,1.2rem)] tracking-[0.03em] text-[--portfolio-muted] transition-opacity duration-200"
            style={{ opacity: nameMotion.subtitleOpacity }}
          >
            Desenvolvedor Full-stack que transforma conceitos em produtos
            digitais.
          </p>
        </div>
        <div
          className="absolute right-4 top-0 "
          style={{ display: nameMotion.imageDisplay }}
        >
          <div className="flex-row flex items-center pointer-events-auto justify-center w-40 gap-4 py-4">
            <ThemeToggle />
            <div className="items-center  justify-center w-16 h-16 overflow-hidden rounded-full max-w-20">
              <Image
                src="/cayo_profile/profile9.webp"
                width={200}
                height={200}
                alt="Logo"
                className="object-cover w-full h-full scale-180 object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none fixed bottom-8 left-1/2 z-60 -translate-x-1/2 transition-opacity duration-200 md:bottom-10"
        style={{ opacity: nameMotion.scrollCueOpacity }}
      >
        <div
          className="pointer-events-none fixed bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 transition-opacity duration-300 md:bottom-10"
          style={{ opacity: nameMotion.scrollCueOpacity }}
        >
          <span className={styles.scrollArrow} />
        </div>
      </div>

      <div className="pointer-events-none fixed inset-0 z-1 bg-[var(--portfolio-bg)] transition-colors duration-300">
        <div className="absolute left-[-12vw] top-[-12vh] h-[38vh] w-[48vw] bg-[var(--portfolio-glow-a)] blur-[70px]" />
        <div className="absolute bottom-[8vh] right-[-10vw] h-[32vh] w-[44vw] bg-[var(--portfolio-glow-b)] blur-[82px]" />
        <div className="absolute inset-0 mix-blend-soft-light opacity-20 bg-[radial-gradient(var(--portfolio-grain)_0.5px,transparent_0.5px)] bg-size-[2px_2px]" />
      </div>

      <div className="relative z-10 flex flex-col">
        {sections.map((section, index) => (
          <section
            key={section.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            data-index={index}
            id={section.id}
            className={cn(
              "flex  items-center justify-center",
              index === 0 && "pt-[100svh] md:pt-[100vh]",
            )}
          >
            <div className="mx-auto w-full max-w-7xl">
              <article
                className={cn(
                  "w-full max-w-none border-b border-dashed border-[var(--portfolio-border)] p-[clamp(1.4rem,3vw,2.2rem)] text-[var(--portfolio-text)] transition-[opacity,transform] duration-420 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  visibleSections.includes(index)
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-6 scale-[0.98] opacity-0",
                )}
              >
                {/* <span className="mb-3 inline-block text-[0.74rem] tracking-[0.18em] text-[rgba(245,194,163,0.9)]">
                  {String(index + 1).padStart(2, "0")}
                </span> */}
                <h2 className="m-0 text-5xl leading-[0.95] tracking-[0.02em]">
                  {section.title}
                </h2>
                <p className="mt-4 max-w-[62ch] text-paragraph leading-[1.65] text-[var(--portfolio-muted)]">
                  {section.description}
                </p>
                <div className="grid gap-3 sm:grid-cols-2 pt-4">
                  {section.projects?.map((project, index) => (
                    <Link
                      key={index}
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group block rounded-xl border border-[var(--portfolio-border)] bg-[var(--portfolio-panel)] p-4 transition-all duration-200 hover:bg-[var(--portfolio-panel-strong)]"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-medium text-2xl group-hover:underline underline-offset-2">
                          {project.title}
                        </h3>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-up-right mt-0.5 shrink-0 text-quaternary-color transition-all group-hover:text-primary-color group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        >
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                      </div>
                      <p className="mt-1.5 text-sm text-secondary-color leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.stacks?.map((stack) => (
                          <span
                            key={stack}
                            className="text-[11px] text-tertiary-color font-mono"
                          >
                            {stack}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
                {section.id === "contato" && (
                  <div className="flex gap-2 items-center pt-3">
                    <Link href="mailto:cayofelipe31@gmail.com">
                      <Mail className="w-10 h-10" />
                    </Link>
                    <Link href="https://github.com/cayof31">
                      {" "}
                      <Github className="w-10 h-10" />
                    </Link>
                    <Link href="https://instagram.com/cayofelipee_">
                      <Instagram
                        className="w-10 h-10"
                        href="https://instagram.com/cayofelipee_"
                      />
                    </Link>
                    <Link href="https://www.linkedin.com/in/cayof04/">
                      <Linkedin
                        className="w-10 h-10"
                        href="https://www.linkedin.com/in/cayof04/"
                      />
                    </Link>
                    {/* <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Instagram</title>
                      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                    </svg> */}
                  </div>
                )}
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {section.svgs?.map((svg, index) => (
                    <div
                      key={index}
                      className={cn(
                        "w-10 h-10 flex items-center justify-center",
                        index === 6 ? "w-28 h-10" : "",
                      )}
                    >
                      {svg}
                    </div>
                  ))}
                  {section.tags?.map((tag) => (
                    <span
                      key={`${section.id}-${tag}`}
                      className="rounded-full border border-[#fad5b53d] bg-white/5 px-3 py-[0.3rem] text-[0.78rem] uppercase tracking-[0.06em] text-[rgba(255,233,215,0.92)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </section>
        ))}
        <section className="flex mx-auto w-full max-w-7xl">
          <div className="w-full max-w-none border-b border-dashed border-[var(--portfolio-border)] p-[clamp(1.4rem,3vw,2.2rem)] text-[var(--portfolio-text)] transition-[opacity,transform] duration-420 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <Link href="/posts">
              <h2 className="m-0 text-5xl leading-[0.95] tracking-[0.02em] text-[var(--portfolio-text)]">
                Posts do Blog
              </h2>
            </Link>
            <ol className="pt-4 ">
              {posts.map((post, index) => (
                <li
                  key={index}
                  className="mb-4 hover:border-b-2 border-primary-color"
                >
                  <Link
                    className="group flex flex-col gap-0 sm:flex-row sm:items-center sm:gap-2 py-2 -mx-2 px-2 rounded-lg transition-colors"
                    href={`/posts/${post.slug}`}
                  >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <span className="text-primary-color text-pragraph font-medium leading-snug line-clamp-1">
                        {post.title}
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm shrink-0 font-mono tabular-nums">
                      {post.date}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="flex  items-end pt-14 justify-center pb-6 md:pb-8">
          <div className="mx-auto w-full max-w-7xl">
            <p className="w-full max-w-none text-center text-[clamp(0.68rem,1.4vw,0.86rem)] uppercase tracking-[0.08em] text-[rgba(238,219,205,0.72)]">
              &copy; {new Date().getFullYear()} - CAYO FELIPE.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Capa;
