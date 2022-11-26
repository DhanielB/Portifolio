import { gsap } from "gsap";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { CaretRight } from "phosphor-react";

export default function SectionThree({
  prices,
  check
}: {
  prices: any;
}) {
  const router = useRouter();

  const overTitleRef = useRef(null);
  const overDescriptionOneRef = useRef(null);
  const overDescriptionTwoRef = useRef(null);
  const overTitleProductsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      overTitleRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0,
      },
      {
        y: 0,
        duration: 2,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: overTitleRef.current,
          start: "center 100%",
          end: "center 30%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      overDescriptionOneRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0,
      },
      {
        y: 0,
        duration: 2,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: overDescriptionOneRef.current,
          start: "center 50%",
          end: "center 30%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      overDescriptionTwoRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0,
      },
      {
        y: 0,
        duration: 2,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: overDescriptionTwoRef.current,
          start: "center 50%",
          end: "center 30%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      overTitleProductsRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0,
      },
      {
        y: 0,
        duration: 2,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: overTitleProductsRef.current,
          start: "center 100%",
          end: "center 30%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="app__section_three">
      <h1 ref={overTitleRef} className="app__section_three__title">
        Over the<br></br> past 1 year,
      </h1>

      <p
        ref={overDescriptionOneRef}
        className="app__section_three__description_one"
      >
        I&apos;ve built products for companies and businesses<br></br> around
        the globe ranging from marketing websites<br></br> to complex solutions
        and enterprise apps with focus<br></br> on fast, elegant and accessible
        user experiences.
      </p>
      <p
        ref={overDescriptionTwoRef}
        className="app__section_three__description_two"
      >
        Currently, I work at Shopify as a Senior UX Developer<br></br> and
        Accessibility advocate crafting thoughtful and<br></br> inclusive
        experiences that adhere to web standards<br></br> for over a million
        merchants across the world.
      </p>

      <h1
        ref={overTitleProductsRef}
        className="app__section_three__products_title"
      >
        Help me by buying:
      </h1>

      <ul className="app__section_three__products">
        {prices.map((price: any) => {
          const { priceId, unit_amount } = price;
          const { id, name, description } = price.product;

          const formatter = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          });

          return (
            <li key={id} className="app__section_three__product">
              <div
                onClick={async () => {
                  const checkoutUrl = await fetch(`/api/checkout/generateCheckout?id=${priceId}`)

                  router.push(checkoutUrl?.session?.url);
                }}
              >
                <h1 className="app__section_three__product_title">{name}</h1>
                <h1 className="app__section_three__product_price">{formatter.format(unit_amount/100)}</h1>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
