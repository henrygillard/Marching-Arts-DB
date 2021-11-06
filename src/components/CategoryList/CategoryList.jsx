export default function CategoryList({categories, groups}) {
    
    return (
        <div>
            <ul>
               {categories.map(cat => <li>{cat.name}</li>)}
            </ul>
        </div>
    )
}