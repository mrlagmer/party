import { redirect } from "@remix-run/node";

import Hero from "../components/hero";
import Cocktail from "~/components/cocktail";
import Karaoke from "~/components/karaoke";
import Details from "~/components/details";
import Rsvp from "~/components/rsvp";

export const action = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get("name");

  return redirect("/thanks");
};

export default function Index() {
  return (
    <div>
      <audio src="AUD_AP0115.mp3" autoPlay loop />
      <Hero />
      <Cocktail />
      <Karaoke />
      <Details />
      <Rsvp />
    </div>
  );
}
