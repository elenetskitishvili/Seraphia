import PremiumCTA from "@/src/components/premium/PremiumCTA";

export default function TermsOfService() {
  return (
    <>
      <section className="bg-bgLight dark:bg-gradient-to-b dark:from-darkModeBgLighter dark:to-indigo-900 text-center pt-[100px] pb-20 480px:py-[240px] 770px:py-[230px] 990px:py-[210px] px-6">
        <h1 className="text-[40px] 480px:text-[56px] 770px:text-[64px] 990px:text-[112px]  font-bold leading-none -tracking-[2px] 990px:-tracking-[5px] mb-6 770px:mb-10">
          Terms of Service
        </h1>
        <p className="text-lg 480px:text-xl text-customGray dark:text-indigo-500 font-semibold tracking-tight">
          Terms of use described in this document
        </p>
      </section>
      <section className="px-6 770px:px-10 py-[60px] 480px:py-20 770px:py-[120px] max-w-[840px] mx-auto">
        <h3 className="text-[28px] 480px:text-4xl mb-8 leading-none font-bold tracking-tighter">
          We&apos;re always looking for new ways to provide privacy for our
          customers.
        </h3>
        <article className="text-customGray dark:text-darkModeTextSecondary text-lg flex flex-col gap-6">
          <p>
            Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit
            habitasse non ullamcorper enim, diam quam id et, tempus massa. Sed
            nam vulputate pellentesque quis. Varius a, nunc faucibus proin
            elementum id odio auctor. Nunc, suspendisse consequat libero,
            pharetra tellus vulputate auctor venenatis tortor non rhoncus at
            duis. Pharetra ipsum mauris integer sit feugiat.
          </p>
          <ul>
            <li>
              Blandit dignissim nulla varius tristique a sed integer ut tempor.
            </li>
            <li>Augue interdum semper bibendum amet sed.</li>
            <li>Dis in at ultricies tortor sit tellus.</li>
            <li>Habitant ornare aenean maecenas pretium.</li>
          </ul>
          <p>
            Eget purus aenean sit risus. Arcu, aliquam eget et viverra risus
            purus. Commodo fames tristique dui pharetra elit aliquet morbi. Eget
            consectetur risus nunc lorem sit consequat aliquet. Dolor velit
            consectetur etiam scelerisque. Integer interdum sodales scelerisque
            diam massa quam sit quis. Sed et dui a nam pulvinar. Tristique
            justo, donec lectus vitae, cursus ligula ridiculus lacus, tincidunt.
            Diam dictumst faucibus dui aliquet aenean nascetur feugiat leo.
            Etiam dignissim orci dignissim vitae.
          </p>
        </article>
        <h3 className="text-[28px] 480px:text-4xl my-8 leading-none font-bold tracking-tighter">
          Your data is safe with us, we will not share any information.
        </h3>
        <article className="text-customGray dark:text-darkModeTextSecondary text-lg flex flex-col gap-6">
          <p>
            Blandit dignissim nulla varius tristique a sed integer ut tempor.
            Augue interdum semper bibendum amet sed. Dis in at ultricies tortor
            sit tellus. Habitant ornare aenean maecenas pretium, dui ullamcorper
            quis. Egestas viverra et id aliquet faucibus rhoncus a. Sollicitudin
            nisl nulla tempor pretium lorem at mauris faucibus pulvinar.
          </p>
          <ol>
            <li>
              Eget purus aenean sit risus. Arcu, aliquam eget et viverra risus
              purus. Commodo fames tristique dui pharetra elit aliquet morbi.
            </li>
            <li>
              Eget consectetur risus nunc lorem sit consequat aliquet. Dolor
              velit consectetur etiam scelerisque.
            </li>
            <li>
              Integer interdum sodales scelerisque diam massa quam sit quis. Sed
              et dui a nam pulvinar. Tristique justo, donec lectus vitae, cursus
              ligula ridiculus lacus, tincidunt.
            </li>
            <li>
              Diam dictumst faucibus dui aliquet aenean nascetur feugiat leo.
              Etiam dignissim.
            </li>
          </ol>
          <p>
            Id est convallis sit enim. Consequat orci lorem egestas in urna diam
            quis in cursus. Aenean a, urna, fringilla sit nunc. Nibh sed tempus,
            a amet aliquet neque enim tristique. Egestas faucibus nunc malesuada
            commodo mauris sit eget morbi sed.
          </p>
        </article>
      </section>
      <PremiumCTA />
    </>
  );
}
