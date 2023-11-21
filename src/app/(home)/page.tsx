import Categories from "./components/categories"

export default function Home() {
  return (
    <div className="p-5">
      <img className="h-auto w-full rounded-lg" src="https://placehold.co/600x200/292929/white?text=Banner+Promo%C3%A7%C3%A3o" alt="" />
      <div className="mt-6">
        <Categories />
      </div>
    </div>
  )
}
