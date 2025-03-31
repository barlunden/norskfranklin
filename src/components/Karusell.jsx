import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'


export const Karusell = () => {
  return (
    <CCarousel controls indicators className='mx-24 border-1 hidden md:block'>
      <CCarouselItem>
        <CImage className="d-block w-100" src="/images/Franklin1929I.jpg" alt="1929 Franklin" />
        <CCarouselCaption className="backdrop-blur-md border-1 border-slate-400 rounded-lg">
          <h5 className='font-bold'>1929 Franklin</h5>
          <p className='hidden lg:inline'>Eier: Sverre Haugesten</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="/images/Franklin1929II.jpg" alt="1929 Franklin" />
        <CCarouselCaption className="backdrop-blur-md border-1 border-slate-400 rounded-lg">
          <h5>1929 Franklin</h5>
          <p className='hidden lg:inline'>Eier: Sverre Haugesten</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="/images/FranklinRondane2.jpeg" alt="slide 3" />
        <CCarouselCaption className="backdrop-blur-md border-1 border-slate-400 rounded-lg">
          <h5>Franklin 9B Touring</h5>
          <p className='hidden lg:inline'>Eier: Trude Bjerkeseth</p>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  )
}
