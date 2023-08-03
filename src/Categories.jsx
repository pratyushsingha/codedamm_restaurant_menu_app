import React from 'react'

const Categories = (props) => {
	const { filterItems, categories } = props

	return (
		<div className="btn-container">
        {categories.map((category, index) => {
            return (<button key={index} className="filter-btn" onClick={() => filterItems(category)}>
				{category}
			</button>)
        })}
		</div>
	)
}

export default Categories
