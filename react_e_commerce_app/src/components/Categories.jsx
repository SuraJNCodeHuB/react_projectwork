import CategoriesItems from "./CategoriesItems";

function Categories(props) {
    return (
        <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">{props.title}</h2>
                {props.linktext && (
                    <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                        {props.linktext}
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                )}
            </div>

            <div className="mt-4 flow-root">
                <div className="-my-2">
                    <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                        <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                            <CategoriesItems 
                                category="New Arrivals" 
                                image="https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg" 
                            />
                            <CategoriesItems 
                                category="Productivity" 
                                image="https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg" 
                            />
                            <CategoriesItems 
                                category="Workspace" 
                                image="https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg" 
                            />
                            <CategoriesItems 
                                category="Accessories" 
                                image="https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg" 
                            />
                            <CategoriesItems 
                                category="Sale" 
                                image="https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg" 
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 px-4 sm:hidden">
                <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                    Browse all categories
                    <span aria-hidden="true"> &rarr;</span>
                </a>
            </div>
        </section>
    );
}

export default Categories;
