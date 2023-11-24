import Header from '../../components/Header';
import { Row, Col, Image, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/home.scss';
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className='container__base'>
          <Row>
            <Col sm={7}>
              <section>
                <Col xs={12}>
                  <Image
                    src='https://alice.com.br/blog/i/Or5BLJH0oyFFTKbyWD0mMM96lRQ=/1200x638/smart/filters:format(jpeg)/alice.com.br/blog/wp-content/uploads/2023/05/sintomas-de-pressao-alta.jpg'
                    fluid
                  />
                </Col>
                <div className='cont'>
                  <Col sm={5}>
                    <h1>Vínculo Vital</h1>
                  </Col>
                  <Col sm={4}>
                    <p>
                      Um projeto para trazer melhoria para a vida da população
                      hipertensa mundial, trazendo informações sobre a sua saúde
                      na palma da sua mão.
                    </p>
                    <Button
                      variant='outline-secondary'
                      target='_blank'
                      href='https://www.paho.org/pt/noticias/19-9-2023-relatorio-lancado-pela-oms-detalha-impacto-devastador-da-hipertensao-e-formas'
                      className='mb-2'
                    >
                      Saiba mais
                    </Button>
                  </Col>
                </div>
              </section>
            </Col>
            <Col sm={5}>
              <h3 className='font-weight-ligth'>
                Te ajudando a monitorar seu coração.
              </h3>
              <p className='mt-4'>
                Trazendo o monitoramento da sua pressão de forma clara, em
                gráficos disponibilizados no seu celular ou computador e
                enviando alarmes para o seu médica em caso de pressão alta.
              </p>
              <p className='mt-1'>
                Aliando assim, cuidado e tecnologia de forma intuitiva, Vínculo
                Vital é o futuro dos aparelhos de pressão em todo o mundo.
              </p>
              <h3 className='font-weight-ligth mt-2'>
                Rastreamento em tempo real.
              </h3>
              <p className='mt-4'>
                Meça a sua pressão e veja ela ser disponibilizada no nosso site
                junto a informações relevantes a sua saúde, orientações do seu
                médico e chat 24 horas em caso de dúvidas, se cuidando de forma
                simplificada e acessível para todos
              </p>
              <h3 className='font-weight-ligth mt-2'>
                IOT dentro do seu aparelho de pressão.
              </h3>
              <p className='mt-4'>
                Garantindo respostas rápidas e inteligentes que facilitam e
                simplicam o entendimento da sua pressão, e permitem ao seu
                médico, ser avisado com antecedência caso algo aconteça.
              </p>
              <p>Venha criar esse vínculo conosco!</p>
            </Col>
          </Row>
        </div>
        <div className='container__base'>
          <Row>
            <h2 className='subTitle'>Fortalecendo o nosso vínculo:</h2>
            <Col className='mb-3'>
              <Card style={{ width: '18rem' }} className='m-1'>
                <Card.Img
                  variant='top'
                  src='https://s2.glbimg.com/7AxnM2zLsRz1NpYTZUDe41v9TsE=/e.glbimg.com/og/ed/f/original/2015/03/27/o-que-e-pre-eclampsia.jpg'
                />
                <Card.Body>
                  <Card.Title>
                    Auxiliando o controle da saúde na gravidez
                  </Card.Title>
                  <Card.Text>
                    Rastreamento em dias, horas e semanas, com gráficos simples,
                    facilitando a visualização.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }} className='m-1'>
                <Card.Img
                  variant='top'
                  src='https://maislaudo.com.br/wp-content/uploads/2023/01/sintomas-de-pressao-alta.jpg'
                />
                <Card.Body>
                  <Card.Title>Informações simplificadas</Card.Title>
                  <Card.Text>
                    Informando a sua pressão de forma simples, trazendo maior
                    compreensão para pessoas em todas as faixas de idade.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }} className='m-1'>
                <Card.Img
                  variant='top'
                  src='https://onmed.com.br/wp-content/uploads/2022/12/post_thumbnail-b196977d24e0419466bc08b47e579401.jpeg'
                />
                <Card.Body>
                  <Card.Title>
                    Informação diretamente para o seu médico
                  </Card.Title>
                  <Card.Text>
                    Configure contatos de emergência que serão avisados caso a
                    sua pressão apresente irregularidades.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </main>
    </>
  );
}
