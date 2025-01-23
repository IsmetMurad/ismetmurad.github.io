import Product from "../components/Product/Product"
import Book from '../imgs/book.png'
import Book2 from  '../imgs/jsbook.png'
import Book3 from '../imgs/htmlcss.png'
import Book4 from '../imgs/c++.png'
import Book5 from '../imgs/phyton.png'
import Book6 from '../imgs/csh.png'
import Book7 from '../imgs/java.png'
import Book8 from '../imgs/sql.png'
import '../pages/products.css'

function products ()  {
  
  return ( 
  <>
  <div className="product-wrapper">
      <Product img={Book} name="React Book" description="Lorem ipsum dolor sit amet" />
      <Product img={Book2} name="JavaScript Book" description="Lorem ipsum dolor sit amet" />
      <Product img={Book3} name="HTML CSS Book" description="Lorem ipsum dolor sit amet" />
      <Product img={Book4} name="C++ Book" description="Lorem ipsum dolor sit amet" />
      <Product img={Book5} name="Python Book" description="Lorem ipsum dolor sit amet" />
      <Product img={Book6} name="C# Book" description="Lorem ipsum dolor sit amet" />
      <Product img={Book7} name="Java Book" description="Lorem ipsum dolor sit amet" />
      <Product img={Book8} name="SQL Book" description="Lorem ipsum dolor sit amet" />

  </div>

  </>
  ) 
};

export default products