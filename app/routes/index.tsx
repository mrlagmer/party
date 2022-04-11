import { redirect } from "@remix-run/node";

import Hero from "../components/hero";
import Cocktail from "~/components/cocktail";
import Karaoke from "~/components/karaoke";
import Details from "~/components/details";
import Rsvp from "~/components/rsvp";

export const action = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get("name");
  fetch(
    "https://script.google.com/macros/s/AKfycbz4ciZFzFUj8Pex6m3YdPlhF1mJEvrV2sKZZA7YFdHMV6Rao0-OwzJYPNYfjx7FvIpN/exec",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    }
  ).then(() => console.log("Form successfully submitted"));
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
