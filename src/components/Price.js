import React, { PropTypes, Component } from 'react'

export default class Price extends Component {
    onItemClick(id, isHide) {
        this.props.expandItem(id, isHide)
    }
    onChangeFilter(e) {
        this.props.changeFilter(e.target.value)
    }
    filterItem(items){
        let result = [];
        for(let i = 0; i < items.length; i+=1){
            if(!this.props.keyword || items[i].name.toLowerCase().indexOf(this.props.keyword.toLowerCase()) +1){
                result.push(items[i]);
            }
        }
        return result;
    }
    renderItem(entry) {
        let isHide = (this.props.expandItemKey != entry._id);
        let inStock = (entry.stock > 0);
        let onClickF = () => this.onItemClick(entry._id, isHide);
        
        return  (<div key={entry._id} className='item col-md-12' onClick={onClickF}>
            <div>
                <img src={entry.img}/>
            </div>
            <div>
                <div className='mainInfo'>
                    <p className='name'>{entry.name}</p>
                    <p className='cost'><span></span>{entry.cost}$</p>
                </div>
                <div className={(isHide)? 'description hidden':'description'}>
                    <p>{entry.description}</p>
                    <span className={(inStock)?'stock':'stock custom'}>
                        {(inStock)? 'На складе: '+entry.stock : 'Под заказ'}
                    </span>
                </div>
            </div>
        </div>);
    }
    renderFilter(){
        return (<input
            type='text'
            className='form-control'
            placeholder='Введите наименование товара'
            onInput={::this.onChangeFilter}
        />)
    }
    render() {
        let items = this.filterItem(this.props.items);
        return (<div className='itemBlock col-md-8 col-md-offset-2'>
            {this.renderFilter()}
            {(items.length)
                ? items.map(::this.renderItem)
                : <p className='non-items'>Товаров, соответствующих введённым данным, не найдено.</p>}
        </div>);
    }
}

Price.propTypes = {
    items: PropTypes.array.isRequired,
    expandItem: PropTypes.func.isRequired,
    changeFilter: PropTypes.func.isRequired
};
