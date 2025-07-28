import Button from './Button'
import "../App.css"

function Section_1() {
  return (
    <div className='section_1'>
      <div className='textSection_1'>
        <div>
          <h2>We bake for you</h2>
          <p>You enjoy the moment</p>
        </div>
        <Button text={'Explore Our Cakes'}></Button>
      </div>
    </div>
  )
}

export default Section_1