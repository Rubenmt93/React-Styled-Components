import styled from 'styled-components'

const P = styled.p `
  font-size:24px;
  color:red;
` 
const Content= styled.div`
  padding: 20px 25px;

`

const Button = styled.button`
  transition: box-shadow 0.2s ease;
  background-color: ${props=> props.primary? 'red' : 'white'};
  color: ${props=> props.primary? 'white': 'red'};
  padding 10px 15px;
  border: solid 2px red;
  border-radius: 4px;

  &:hover {
    box-shadow: 1px 2px 5px rgb(0,0,0,0.3)
  }

  &.secondary {
    background-color:blue;
    border: solid 2px blue;
    color:white

  }
`
const BlockButton= styled(Button)`
  width:100%;
  font-size:24px;
`


const Link = ({ className, ...props})=> {
  return <a className={className} {...props}></a>
}
  
const StyledLink = styled(Link)` 
  color: blue 
  
`
function App() {
  return (
    <Content>
      <P>Hola</P>
      <Button> Enviar</Button>
      <br/>
      <br/>
      <Button primary> Enviar</Button>
      <Button  className='secondary'> Enviar</Button>
      <br/>
      <br/>
      <BlockButton> Enviar</BlockButton>
      <Link>Link</Link>
      <StyledLink>StyledLink</StyledLink>
    </Content>
  );
}

export default App;
