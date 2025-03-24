import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'

export const Karusell = () => {
  return (
    <CCarousel controls indicators className='m-3 border-4 border-y-slate-400 border-x-slate-500'>
      <CCarouselItem>
        <CImage className="d-block w-100" src="/public/images/Franklin1929I.jpg" alt="1929 Franklin" />
        <CCarouselCaption className="d-none d-md-block backdrop-blur-md border-1 border-slate-400 rounded-lg">
          <h5 className='font-bold'>1929 Franklin</h5>
          <p>Eier: Sverre Haugesten</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="/public/images/Franklin1929II.jpg" alt="1929 Franklin" />
        <CCarouselCaption className="d-none d-md-block backdrop-blur-md border-1 border-slate-400 rounded-lg">
          <h5>1929 Franklin</h5>
          <p>Eier: Sverre Haugesten</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="/public/images/FranklinRondane2.jpeg" alt="slide 3" />
        <CCarouselCaption className="d-none d-md-block backdrop-blur-md border-1 border-slate-400 rounded-lg">
          <h5>Franklin 9B Touring</h5>
          <p>Eier: Trude Bjerkeseth</p>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  )
}
