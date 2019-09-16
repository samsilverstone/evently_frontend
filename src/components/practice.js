formatted_address: action.data.formatted_address,
  formatted_phone_number: action.data.formatted_phone_number,
    reviews: action.data.reviews,
      open_close_timing: action.data.opening_hour,
        website: action.data.website


formatted_address: null,
  formatted_phone_number: null,
    reviews: [],
      open_close_timing: null,
        website: null,
          <ul>
            {props.loadedData.map((item, index) => {
              <li key={index}>{item}</li>
            })}
          </ul>
          // {((this.props.isLoading && this.props.locationInfo[this.props.locationInfo.length - 1].data.place_id === this.props.data.place_id) && this.props.locationInfo.length) ? <Button onClick={this.loadDetails}>Show More</Button> : <PlaceDetails loadedData={this.props.locationInfo} />}
          <Input
            type="select"
            name="selectMulti"
            id="categories"
            className="mt-3 form-control-lg"
            onChange={e => (this.setState({ "Category": e.target.value }))}>
            <option value="restaurant">Restaurant</option>
            <option value="hospital">Hospital</option>
            <option value="hotel">Hotel</option>
            <option value="Bars and pubs">Bars and Pubs</option>
            <option value="amusement park">Amusement Park</option>
          </Input>
          // {props.data.price_level && <div><span>Price Level</span>{props.data.price_level}</div>}
          {
  props.loadedData.reviews.map((item, pos) => {
    Object.keys({ item }).map((field, index) => (
      <li key={{ index } + 1}><span>{field}:</span>{item.field}</li>
    ))
  }
  )
}
{
  props.loadedData.reviews.length > 0 && (
    <ul>
      {props.loadedData.reviews.map((item, index) => (
        item.field == "author_name" ? <p>{item.author_name}</p> : ''
      ))}
    </ul>)
}
{
  this.props.data.name ? <div className="bg-success p-3 mb-3"><h2><</h2></div> : undefined}
           // <Button onClick={this.modalOpen}>Map View</Button>
                    // {this.state.loader && <Loader />}
                    // {this.state.isOpen && <MapViewModal
                    //     isModalVisible={this.state}
                    //     isModalClosed={this.modalClose}
                    //     data={this.props.data}
                    // />}