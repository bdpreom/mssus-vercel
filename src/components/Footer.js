import React from 'react';
import Logo from '../assets/MSSUS Logo.png';
import { Container } from 'react-bootstrap';
import OnTheTopIcon from '../assets/on-the-top.png';

export default function Footer() {
  return (

    <div
      style={{
        backgroundColor: '#003831',
        color: 'white',
      }}
    >
      <Container
        style={{
          paddingBottom: '30px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '70px',
            paddingBottom: '80px'
          }}
        >
          <div>
            <h5>Get In Touch</h5>

            <div
              style={{
                marginTop: '20px',
                marginBottom: '20px',
                width: '100%',
                height: '1px',
                backgroundColor: '#075A4C',
              }}
            />

            <div
              style={{
                display: 'flex',
                gap: '60px',
              }}
            >
              <div>
                <h6>
                  Address
                </h6>

                <div
                  style={{
                    marginTop: '20px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '18px',
                    }}
                  >
                    MSSUS Head Office
                  </div>
                  <div
                    style={{
                      width: '200px',
                    }}
                  >
                    1, Boyra Market Road, Kulna-90000, Bangladesh
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '20px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '18px',
                    }}
                  >
                    Branch Office
                  </div>
                  <div
                    style={{
                      width: '200px',
                    }}
                  >
                    37, khan Jahan Ali Road, Khulna-9100, Bangladesh
                  </div>
                </div>

              </div>

              <div>
                <h6>Call</h6>

                
                <div
                  style={{
                    marginTop: '20px',
                  }}
                >
                  +880 1715 106 890 <br />
                  +880 412 850 277
                </div>

              </div>

              <div>
                <h6>Email</h6>

                
                <div
                  style={{
                    marginTop: '20px',
                  }}
                >
                  shamimasultanashilu@gmail.com <br />
                  mssus.khulna@gmail.com
                </div>

              </div>



            </div>

          </div>

          <div>
            <img src={Logo} alt='logo' />
          </div>


        </div>



        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#075A4C',

          }}
        />

        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >

          <div>Copyright 2024 . All Right Reserved.</div>
          <div><img src={OnTheTopIcon} alt='on the top' />Go to Top</div>


        </div>

      </Container>
    </div>
  );
}
