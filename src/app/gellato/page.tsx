import type { Metadata } from "next";
import {
  Camera,
  ChevronRight,
  Gift,
  Home,
  IceCreamBowl,
  MapPin,
  QrCode,
  Sparkles,
  Star,
  TicketPercent,
  UserRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Proposta Gellato",
  description: "Proposta comercial de transformação digital para a Gellato.",
  robots: {
    index: false,
    follow: false,
  },
};

const unlockedRewards = [
  {
    title: "Gelato Pequeno",
    description: "Resgate liberado hoje",
    icon: IceCreamBowl,
    tone: "bg-orange-100 text-orange-700",
  },
  {
    title: "Calda Especial",
    description: "Upgrade grátis no pedido",
    icon: Sparkles,
    tone: "bg-amber-100 text-amber-700",
  },
];

const nextRewards = [
  {
    title: "Cupom de R$ 10",
    description: "Faltam 25 pontos",
    icon: TicketPercent,
  },
  {
    title: "Combo Família",
    description: "Faltam 60 pontos",
    icon: Gift,
  },
];

export default function GellatoProposalPage() {
  return (
    <main className="min-h-dvh overflow-hidden bg-[#fff3df] text-[#2f1d12]">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_18%_6%,rgba(255,157,45,0.28),transparent_34%),radial-gradient(circle_at_88%_14%,rgba(255,203,116,0.36),transparent_31%),linear-gradient(135deg,#fff9ee_0%,#ffe6bd_48%,#fff2dd_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-[0.16] [background-image:linear-gradient(rgba(148,82,25,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,82,25,0.12)_1px,transparent_1px)] [background-size:42px_42px]" />

      <section className="relative z-10 mx-auto flex min-h-dvh w-full max-w-5xl items-center px-5 py-12 sm:px-8 lg:px-10">
        <div className="w-full rounded-[2.25rem] border border-white/70 bg-white/58 p-6 shadow-[0_28px_90px_rgba(136,77,24,0.18)] backdrop-blur-xl sm:p-10 md:p-14">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#f3bc78] bg-[#fff7ed]/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#a65818]">
            <IceCreamBowl className="h-4 w-4" />
            Proposta Comercial
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-4 font-[var(--font-codec-pro)] text-sm uppercase tracking-[0.42em] text-[#b76520]">
                Gelatto Sorvetes · Barra do Garças
              </p>
              <h1 className="max-w-3xl font-[var(--font-bebas-neue)] text-5xl font-normal uppercase leading-[0.92] tracking-[0.04em] text-[#3a220f] sm:text-7xl md:text-8xl">
                Proposta de Transformação Digital: Gellato + Fidelidade
                Inteligente.
              </h1>
            </div>

            <div className="rounded-[2rem] border border-[#efc796] bg-[#fffaf2]/85 p-5 shadow-[0_20px_50px_rgba(121,68,21,0.12)] sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-[#fff0d2] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#b15d13]">
                  WebApp VIP
                </span>
                <Star className="h-5 w-5 fill-[#f6aa2f] text-[#f6aa2f]" />
              </div>
              <p className="text-lg leading-8 text-[#5f4128]">
                Uma experiência simples para transformar visitas no balcão em
                relacionamento, recorrência e campanhas reais de retenção.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <article className="rounded-[2rem] border border-[#f1c08a] bg-[#fff7ec]/88 p-6 shadow-[0_16px_38px_rgba(143,83,28,0.1)] sm:p-8">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-[#d66d18]">
                O Problema
              </p>
              <p className="font-[var(--font-codec-pro)] text-2xl leading-10 text-[#3d2818] sm:text-3xl">
                Hoje você atende centenas de clientes, mas não tem o contato
                deles para criar campanhas de retenção.
              </p>
            </article>

            <article className="rounded-[2rem] border border-[#f5d49d] bg-[#fffaf0]/88 p-6 shadow-[0_16px_38px_rgba(143,91,28,0.1)] sm:p-8">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-[#b76b10]">
                A Solução
              </p>
              <p className="font-[var(--font-codec-pro)] text-2xl leading-10 text-[#3a2d18] sm:text-3xl">
                Um WebApp leve focado em gamificação e recompensa. O cliente
                compra, acumula pontos e volta para resgatar.
              </p>
            </article>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-1 md:gap-10 items-center">
            <article className="rounded-[2rem] sm:p-8 w-full border border-[#f1c08a] bg-[#fff7ec]/88 p-6 shadow-[0_16px_38px_rgba(143,83,28,0.1)]">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-[#b76b10]">
                A Visão
              </p>
              <p className="font-[var(--font-codec-pro)] text-2xl leading-10 text-[#3a2d18] sm:text-3xl">
                Muito além de um programa de pontos, o app é o seu canal de
                comunicação direto. Crie promoções exclusivas para datas
                comemorativas, lance campanhas personalizadas e avise seus
                clientes instantaneamente via notificação. Sua marca será
                lembrada e estará presente no dia a dia do consumidor, a um
                toque de distância.
              </p>
            </article>
            <article className="rounded-[2rem] sm:p-8 w-full border border-[#f5d49d] bg-[#fffaf0]/88 p-6 shadow-[0_16px_38px_rgba(143,91,28,0.1)]">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-[#b76b10]">
                Resultado
              </p>
              <p className="font-[var(--font-codec-pro)] text-2xl leading-10 text-[#3a2d18] sm:text-3xl">
                Recompensar quem já ama o seu gelato cria um efeito cascata.
                Clientes fiéis e engajados com o aplicativo se sentem
                valorizados e se tornam os maiores promotores da sua marca. O
                resultado? Um aumento drástico nas indicações boca a boca, que
                é, de longe, o marketing mais poderoso e rentável para o seu
                estabelecimento.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-4 py-14 sm:px-8">
        <div className="mb-8 max-w-2xl text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.36em] text-[#b45f16]">
            O Pulo do Gato
          </p>
          <h2 className="font-[var(--font-bebas-neue)] text-5xl font-normal uppercase tracking-[0.05em] text-[#3a220f] sm:text-7xl">
            App VIP da Gellato
          </h2>
          <p className="mt-3 text-base leading-7 text-[#6b4a2c] sm:text-lg">
            Um clube de fidelidade que parece aplicativo nativo, mas abre direto
            no celular do cliente pelo navegador.
          </p>
        </div>

        <div className="relative w-full max-w-[390px]">
          <div className="absolute -left-10 top-20 h-36 w-36 rounded-full bg-[#ff9f32]/45 blur-3xl" />
          <div className="absolute -right-8 bottom-24 h-44 w-44 rounded-full bg-[#ffd36f]/50 blur-3xl" />

          <div className="relative mx-auto h-[700px] w-[350px] overflow-hidden rounded-[3.25rem] border-[10px] border-[#171717] bg-[#111] shadow-[0_36px_100px_rgba(74,44,18,0.42)] max-[380px]:h-[660px] max-[380px]:w-[330px]">
            <div className="absolute left-1/2 top-0 z-30 h-7 w-36 -translate-x-1/2 rounded-b-[1.25rem] bg-[#171717]" />
            <div className="absolute left-1/2 top-2 z-40 h-1.5 w-14 -translate-x-1/2 rounded-full bg-[#2f2f2f]" />

            <div className="relative h-full overflow-hidden rounded-[2.45rem] bg-[#fff6e8]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,145,37,0.34),transparent_35%),radial-gradient(circle_at_94%_10%,rgba(255,209,112,0.4),transparent_32%),linear-gradient(180deg,#fff9ef_0%,#ffe7c2_50%,#fff9f1_100%)]" />
              <div className="absolute inset-x-0 top-0 h-32 bg-white/38 backdrop-blur-sm" />

              <div className="relative z-10 flex h-full min-h-0 flex-col px-5 pb-4 pt-10">
                <header className="flex shrink-0 items-center justify-between pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#aa6225]">
                      Clube VIP
                    </p>
                    <h3 className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#2f1d12]">
                      Olá, João!
                    </h3>
                    <p className="mt-1 flex items-center gap-1 text-[11px] font-bold text-[#9d7047]">
                      <MapPin className="h-3 w-3" />
                      Barra do Garças · MT
                    </p>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#3a220f] text-[#fff3df] shadow-lg shadow-[#8d4a13]/25">
                    <IceCreamBowl className="h-6 w-6" />
                  </div>
                </header>

                <section className="shrink-0 rounded-[1.75rem] bg-[#3a220f] p-4 text-white shadow-[0_22px_46px_rgba(80,47,19,0.3)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ffd49a]">
                        Sua pontuação
                      </p>
                      <div className="mt-2 flex items-end gap-2">
                        <span className="text-5xl font-black tracking-[-0.08em]">
                          75
                        </span>
                        <span className="pb-2 text-sm font-bold text-white/62">
                          / 100 pontos
                        </span>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-3">
                      <QrCode className="h-6 w-6 text-[#ffc46b]" />
                    </div>
                  </div>

                  <div className="mt-4 h-4 overflow-hidden rounded-full bg-white/15 p-1">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#ff7a1a] via-[#ffad32] to-[#ffd36b] shadow-[0_0_22px_rgba(255,122,26,0.72)]" />
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs font-semibold text-white/72">
                    <span>25 pontos para o próximo mimo</span>
                    <span>75%</span>
                  </div>
                </section>

                <button className="mt-4 flex shrink-0 w-full items-center justify-center gap-3 rounded-[1.45rem] bg-gradient-to-r from-[#f97316] via-[#fb8c1c] to-[#f6b73c] px-5 py-3.5 text-sm font-black text-white shadow-[0_18px_34px_rgba(249,115,22,0.28)] transition-transform active:scale-[0.98]">
                  <Camera className="h-5 w-5" />
                  Ler QR Code no Balcão
                </button>

                <div className="mt-4 min-h-0 flex-1 overflow-y-auto pr-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="text-sm font-black text-[#332014]">
                      Prêmios Desbloqueados
                    </h4>
                    <span className="text-xs font-bold text-[#d66d18]">
                      2 ativos
                    </span>
                  </div>

                  <div className="space-y-3">
                    {unlockedRewards.map((reward) => {
                      const Icon = reward.icon;

                      return (
                        <div
                          className="flex items-center gap-3 rounded-[1.25rem] border border-white/80 bg-white/78 p-3 shadow-[0_12px_26px_rgba(91,61,39,0.08)] backdrop-blur"
                          key={reward.title}
                        >
                          <div
                            className={`grid h-11 w-11 place-items-center rounded-2xl ${reward.tone}`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-black text-[#302014]">
                              {reward.title}
                            </p>
                            <p className="text-xs font-semibold text-[#937154]">
                              {reward.description}
                            </p>
                          </div>
                          <ChevronRight className="h-4 w-4 text-[#bb9a7b]" />
                        </div>
                      );
                    })}
                  </div>

                  <div className="mb-3 mt-5 flex items-center justify-between">
                    <h4 className="text-sm font-black text-[#332014]">
                      Próximos Prêmios
                    </h4>
                    <span className="text-xs font-bold text-[#b36a19]">
                      em breve
                    </span>
                  </div>

                  <div className="space-y-3 pb-3">
                    {nextRewards.map((reward) => {
                      const Icon = reward.icon;
                      return (
                        <div
                          className="flex items-center gap-3 rounded-[1.25rem] border border-[#efd3ae] bg-[#fff8ed]/68 p-3 opacity-95"
                          key={reward.title}
                        >
                          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#f2dfc3] text-[#a96721]">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-black text-[#4b321e]">
                              {reward.title}
                            </p>
                            <p className="text-xs font-semibold text-[#9a7859]">
                              {reward.description}
                            </p>
                          </div>
                          <div className="h-2 w-2 rounded-full bg-[#ddad6c]" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <nav className="mt-3 grid shrink-0 grid-cols-3 rounded-[1.65rem] border border-white/70 bg-white/82 p-2 shadow-[0_16px_34px_rgba(82,54,34,0.12)] backdrop-blur-xl">
                  <a
                    className="flex flex-col items-center gap-1 rounded-[1.15rem] bg-[#3a220f] px-2 py-2.5 text-[11px] font-black text-white"
                    href="#"
                  >
                    <Home className="h-4 w-4" />
                    Início
                  </a>
                  <a
                    className="flex flex-col items-center gap-1 px-2 py-2.5 text-[11px] font-bold text-[#8e6a4a]"
                    href="#"
                  >
                    <TicketPercent className="h-4 w-4" />
                    Cupons
                  </a>
                  <a
                    className="flex flex-col items-center gap-1 px-2 py-2.5 text-[11px] font-bold text-[#8e6a4a]"
                    href="#"
                  >
                    <UserRound className="h-4 w-4" />
                    Perfil
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
