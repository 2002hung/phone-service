import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import InfoProduct from './InfoProduct/InfoProduct'
import DescriptionProduct from './DescriptionProduct/DescriptionProduct'
import Comments from './Comments/Comments'
import RelatedProducts from './RelatedProducts/RelatedProducts'

function DetailProduct() {

  return (
    <>
      <Header/>
      <InfoProduct/>
      <DescriptionProduct minHeight={'200'}/>
      <Comments/>
      <RelatedProducts/>
      <Footer/>
    </>
  )
}

export default DetailProduct