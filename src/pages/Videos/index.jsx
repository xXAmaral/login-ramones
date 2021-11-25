import { Banner, Video } from '../../components/Main'

export const Videos = () => {
    return(
        <>
            <Banner titulo="Vídeos da Banda" imagem="images/videos.png"></Banner>

            <h1 className="text-center">Vídeos da Banda</h1>

            <div className="container">
                <div className="row">
                    <Video titulo="Pet Samatary" video="HJWFsZ_YUc4"></Video>

                    <Video titulo="Poison Heart" video="OfIfzVf8t6E"></Video>

                    <Video titulo="I Just Want To Have Something To Do" video="HBZChk32xdA"></Video>

                    <Video titulo="Pet Samatary" video="bm51ihfi1p4"></Video>

                    <Video titulo="Poison Heart" video="i5P8lrgBtcU"></Video>

                    <Video titulo="I Just Want To Have Something To Do" video="bm51ihfi1p4"></Video>
                </div>
            </div>
        </>
    )
} 