import styled from "styled-components";

function Login(props){
    return (<Container>
        <Content>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" alt = "" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>Get the Latest Movies and Get to Experience the IPL from the comfort of your Home.</Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt = "" />
            </CTA>
           <BgImage />
        </Content>
    </Container>)
}

const Container = styled.section`
    overflow: hidden ;
    display: flex ;
    flex-direction: column ;
    text-align: center;
    height: 100vh ;
`;

const Content = styled.div`
    margin-bottom: 10vw ;
    width: 100% ;
    position: relative ;
    min-height: 100vh ;
    box-sizing: border-box ;
    display: flex ;
    justify-content: center ;
    align-items: center ;
    flex-direction: column ;
    padding: 80px 40px ;
    height: 100% ;
` ;

const BgImage = styled.div`
    height: 100% ;
    background-position: top ;
    background-size: cover;
    background-repeat: no-repeat ;
    background-image: url("/images/login-background.jpg") ;
    position: absolute ;
    top: 0 ;
    right: 0 ;
    left: 0 ;
    z-index: -1 ;
`
const CTA = styled.div`
    margin-bottom: 2vw ;
    max-width: 650px ;
    flex-wrap: wrap ;
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    margin-top: 0 ;
    align-items: center ;
    margin-right: auto ;
    margin-left: auto ;
    transition-timing-function: ease-out ;
    transition: opacity 0.2s ;
    width: 100% ;
` ;

const CTALogoOne = styled.img`
    margin-bottom: 12px ;
    max-width: 600px ;
    min-height: 1px ;
    display: block ;
    width: 100% ;
`;

const SignUp = styled.a`
    font-weight: bold ;
    color: #f9f9f9 ;
    background-color: #0063e5 ;
    max-width: 600px ;
    width: 100% ;
    height: 60px ;
    padding-top: 22px ;
    letter-spacing: 1.5px ;
    font-size: 18px ;
    border: 1px solid transparent ;
    border-radius: 4px ;

    &:hover {
        background-color: #0483ee ;
    }
    
` 

const Description = styled.p`
    color: hsla(0,0%,95.3% , 1) ;
    font-size: 11px ;   
    margin-top: 20px ;
    line-heigh: 1.5px ;
    letter-spacing: 1.5px ;
`

const CTALogoTwo = styled.img`
    max-width: 400px ;
    width: 90vw ;
    margin-top: 20px ;
` ;

export default Login ;