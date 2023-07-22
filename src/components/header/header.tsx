import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="p-4 flex flex-row justify-between bg-cyan">
      <div class="flex-none">LOGO</div>
        <ul class="w-1/2 flex justify-around list-none">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
    </header>
  );
});
