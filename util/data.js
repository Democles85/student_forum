import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Code from '../components/Code'

// Image Imports
import javascript_image_1 from '../public/Images/quiz_images/javascript/console_log_1.png'
import javascript_image_2 from '../public/Images/quiz_images/javascript/console_log_2.png'
import javascript_image_3 from '../public/Images/quiz_images/javascript/console_log_3.png'
import javascript_image_4 from '../public/Images/quiz_images/javascript/console_log_4.png'
import javascript_image_5 from '../public/Images/quiz_images/javascript/array_rotation.png'

const data = {
  quizzes: [
    {
      id: 1,
      name: 'JAVA',
      slug: 'java',
      description: 'Quiz per gjuhen e programimit JAVA.',
      // Questions for the quiz
      questions: [
        {
          id: 1,
          slug: 'java-question-1',
          question:
            'Cila eshte sintaksa e sakte per te afishuar "Hello World"?',
          answers: [
            {
              id: 1.1,
              letter: 'a',
              slug: 'answer-1.1',
              answer: 'System.out.println("Hello World");  ',
              correct: true
            },
            {
              id: 1.2,
              letter: 'b',
              slug: 'answer-1.2',
              answer: 'echo("Hello World");',
              correct: false
            },
            {
              id: 1.3,
              letter: 'c',
              slug: 'answer-1.3',
              answer: 'Console.WriteLine("Hello World");',
              correct: false
            }
          ]
        },
        {
          id: 2,
          slug: 'java-question-2',
          question: 'Java eshte shkurtim per "JavaScript"?',
          answers: [
            {
              id: 2.1,
              letter: 'a',
              slug: 'answer-2.1',
              answer: 'E gabuar',
              correct: true
            },
            {
              id: 2.2,
              letter: 'b',
              slug: 'answer-2.2',
              answer: 'E vertet',
              correct: false
            }
          ]
        },
        {
          id: 3,
          slug: 'java-question-3',
          question: 'Si shkruhen komentet ne JAVA',
          answers: [
            {
              id: 3.1,
              letter: 'a',
              slug: 'answer-3.1',
              answer: '// This is a comment  ',
              correct: true
            },
            {
              id: 3.2,
              letter: 'b',
              slug: 'answer-3.2',
              answer: '@/ This is a comment  ',
              correct: false
            },
            {
              id: 3.3,
              letter: 'c',
              slug: 'answer-3.3',
              answer: '# This is a comment',
              correct: false
            }
          ]
        },
        {
          id: 4,
          slug: 'java-question-4',
          question: 'Si krijohet nje variabel numerike  x me vlere 5',
          answers: [
            {
              id: 4.1,
              letter: 'a',
              slug: 'answer-4.1',
              answer: 'int x = 5; ',
              correct: true
            },
            {
              id: 4.2,
              letter: 'b',
              slug: 'answer-4.2',
              answer: 'num x = 5 ',
              correct: false
            },
            {
              id: 4.3,
              letter: 'c',
              slug: 'answer-4.3',
              answer: 'x = 5;',
              correct: false
            }
          ]
        },
        {
          id: 5,
          slug: 'java-question-5',
          question: 'Si krijohet nje variabel numerike  x me vlere 5 ?',
          answers: [
            {
              id: 5.1,
              letter: 'a',
              slug: 'answer-5.1',
              answer: 'int x = 5; ',
              correct: true
            },
            {
              id: 5.2,
              letter: 'b',
              slug: 'answer-5.2',
              answer: 'num x = 5 ',
              correct: false
            },
            {
              id: 5.3,
              letter: 'c',
              slug: 'answer-5.3',
              answer: 'x = 5;',
              correct: false
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'C++',
      slug: 'c++',
      description: 'Quiz per gjuhen e programimit C++',
      questions: [
        {
          id: 1,
          slug: 'c++-question-1',
          question:
            'Cila eshte sintaksa e sakte per te afishuar "Hello World"?',
          answers: [
            {
              id: 1.1,
              letter: 'a',
              slug: 'answer-1.1',
              answer: 'cout << "Hello World";',
              correct: true
            },
            {
              id: 1.2,
              letter: 'b',
              slug: 'answer-1.2',
              answer: 'echo("Hello World");',
              correct: false
            },
            {
              id: 1.3,
              letter: 'c',
              slug: 'answer-1.3',
              answer: 'Console.WriteLine("Hello World");',
              correct: false
            }
          ]
        },
        {
          id: 2,
          slug: 'c++-question-2',
          question: 'C++ eshte shkurtim per "C#".?',
          answers: [
            {
              id: 2.1,
              letter: 'a',
              slug: 'answer-2.1',
              answer: 'E gabuar',
              correct: true
            },
            {
              id: 2.2,
              letter: 'b',
              slug: 'answer-2.2',
              answer: 'E vertet',
              correct: false
            }
          ]
        },
        {
          id: 3,
          slug: 'c++-question-3',
          question: 'Si shkruhen komentet ne C++',
          answers: [
            {
              id: 3.1,
              letter: 'a',
              slug: 'answer-3.1',
              answer: '// This is a comment  ',
              correct: true
            },
            {
              id: 3.2,
              letter: 'b',
              slug: 'answer-3.2',
              answer: '@/ This is a comment  ',
              correct: false
            },
            {
              id: 3.3,
              letter: 'c',
              slug: 'answer-3.3',
              answer: '# This is a comment',
              correct: false
            }
          ]
        },
        {
          id: 4,
          slug: 'c++-question-4',
          question: 'Si krijohet nje variabel numerike  x me vlere 5',
          answers: [
            {
              id: 4.1,
              letter: 'a',
              slug: 'answer-4.1',
              answer: 'int x = 5; ',
              correct: true
            },
            {
              id: 4.2,
              letter: 'b',
              slug: 'answer-4.2',
              answer: 'num x = 5 ',
              correct: false
            },
            {
              id: 4.3,
              letter: 'c',
              slug: 'answer-4.3',
              answer: 'x = 5;',
              correct: false
            }
          ]
        },
        {
          id: 5,
          slug: 'c++-question-5',
          question:
            'Cili header na lejon te punojme me objekte input/output  ?',
          answers: [
            {
              id: 5.1,
              letter: 'a',
              slug: 'answer-5.1',
              answer: '#include <iostream>   ',
              correct: true
            },
            {
              id: 5.2,
              letter: 'b',
              slug: 'answer-5.2',
              answer: '#include <iosstring> ',
              correct: false
            },
            {
              id: 5.3,
              letter: 'c',
              slug: 'answer-5.3',
              answer: '#include <stream>',
              correct: false
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Inxhinieria Software',
      slug: 'is',
      description: 'Quiz per Inxhinierin Software.',
      // Questions for the quiz
      questions: [
        {
          id: 1,
          slug: 'is-question-1',
          question: 'Objektivi kryesore i IS',
          answers: [
            {
              id: 1.1,
              letter: 'a',
              slug: 'answer-1.1',
              answer:
                'Te ofroje menyra per te siguruar nje prodhimin e nje software qe permbush qellimet per te cilat eshte kerkuar .  ',
              correct: true
            },
            {
              id: 1.2,
              letter: 'b',
              slug: 'answer-1.2',
              answer: 'Te mirembaje software-in.',
              correct: false
            },
            {
              id: 1.3,
              letter: 'c',
              slug: 'answer-1.3',
              answer: 'Te testoj software-in.',
              correct: false
            }
          ]
        },
        {
          id: 2,
          slug: 'is-question-2',
          question: 'Procesi i zhvillimit te software kalon neper keto faza :',
          answers: [
            {
              id: 2.1,
              letter: 'a',
              slug: 'answer-2.1',
              answer: 'analiza,modelimi,implementimi,testimi,mirembajtja',
              correct: true
            },
            {
              id: 2.2,
              letter: 'b',
              slug: 'answer-2.2',
              answer: 'analiza,modelimi,implementimi,testimi',
              correct: false
            },
            {
              id: 2.3,
              letter: 'c',
              slug: 'answer-2.3',
              answer: 'analiza,modelimi,testimi,mirembajtja',
              correct: false
            }
          ]
        },
        {
          id: 3,
          slug: 'is-question-3',
          question: 'Cili nuk eshte model',
          answers: [
            {
              id: 3.1,
              letter: 'a',
              slug: 'answer-3.1',
              answer: 'Argumentues',
              correct: true
            },
            {
              id: 3.2,
              letter: 'b',
              slug: 'answer-3.2',
              answer: 'Linear ',
              correct: false
            },
            {
              id: 3.3,
              letter: 'c',
              slug: 'answer-3.3',
              answer: 'Waterfall',
              correct: false
            }
          ]
        },
        {
          id: 4,
          slug: 'is-question-4',
          question: 'Cila eshte teknike Testimi',
          answers: [
            {
              id: 4.1,
              letter: 'a',
              slug: 'answer-4.1',
              answer: 'Black Box ',
              correct: true
            },
            {
              id: 4.2,
              letter: 'b',
              slug: 'answer-4.2',
              answer: 'Test Box',
              correct: false
            },
            {
              id: 4.3,
              letter: 'c',
              slug: 'answer-4.3',
              answer: 'Test Set Box',
              correct: false
            }
          ]
        },
        {
          id: 5,
          slug: 'is-question-5',
          question: 'Kerkesat ndahen ne 2 kategori: ?',
          answers: [
            {
              id: 5.1,
              letter: 'a',
              slug: 'answer-5.1',
              answer: 'funksionale dhe jofunksionale',
              correct: true
            },
            {
              id: 5.2,
              letter: 'b',
              slug: 'answer-5.2',
              answer: 'te domosdoshme ,jo te domosdoshme ',
              correct: false
            }
          ]
        }
      ]
    },
    {
      id: 4,
      name: 'Baze te dhenash',
      slug: 'db',
      description: 'Quiz per Baze te Dhenash.',
      // Questions for the quiz
      questions: [
        {
          id: 1,
          slug: 'db-question-1',
          question: 'SQL eshte akronim per:',
          answers: [
            {
              id: 1.1,
              letter: 'a',
              slug: 'answer-1.1',
              answer: ' Structured Query Language ',
              correct: true
            },
            {
              id: 1.2,
              letter: 'b',
              slug: 'answer-1.2',
              answer: 'Strong Question Language  ',
              correct: false
            },
            {
              id: 1.3,
              letter: 'c',
              slug: 'answer-1.3',
              answer: 'Structured Question Language',
              correct: false
            }
          ]
        },
        {
          id: 2,
          slug: 'db-question-2',
          question:
            'Cila shprehje SQL perdoret per te terhequr te dhena nga databaza',
          answers: [
            {
              id: 2.1,
              letter: 'a',
              slug: 'answer-2.1',
              answer: 'SELECT',
              correct: true
            },
            {
              id: 2.2,
              letter: 'b',
              slug: 'answer-2.2',
              answer: 'GET',
              correct: false
            },
            {
              id: 2.3,
              letter: 'c',
              slug: 'answer-2.3',
              answer: 'OPEN',
              correct: false
            }
          ]
        },
        {
          id: 3,
          slug: 'db-question-3',
          question:
            'Cila shprehje SQL terheq te gjitha kolonat nga tabela Person',
          answers: [
            {
              id: 3.1,
              letter: 'a',
              slug: 'answer-3.1',
              answer: 'SELECT * FROM Person  ',
              correct: true
            },
            {
              id: 3.2,
              letter: 'b',
              slug: 'answer-3.2',
              answer: 'GET * FROM Person ',
              correct: false
            },
            {
              id: 3.3,
              letter: 'c',
              slug: 'answer-3.3',
              answer: 'OPEN * FROM Person ',
              correct: false
            }
          ]
        },
        {
          id: 4,
          slug: 'db-question-4',
          question: 'Kush eshte perdorimi me i shpeshte i JOIN?',
          answers: [
            {
              id: 4.1,
              letter: 'a',
              slug: 'answer-4.1',
              answer: 'INNER JOIN   ',
              correct: true
            },
            {
              id: 4.2,
              letter: 'b',
              slug: 'answer-4.2',
              answer: 'JOINED TABLE',
              correct: false
            },
            {
              id: 4.3,
              letter: 'c',
              slug: 'answer-4.3',
              answer: 'JOINED',
              correct: false
            }
          ]
        },
        {
          id: 5,
          slug: 'db-question-5',
          question: 'Sintaksa per te krijuar nje tabele?',
          answers: [
            {
              id: 5.1,
              letter: 'a',
              slug: 'answer-5.1',
              answer: 'CREATE TABLE emer_tabele',
              correct: true
            },
            {
              id: 5.2,
              letter: 'b',
              slug: 'answer-5.2',
              answer: 'CREATE DATABASE TABLE emer_tabele',
              correct: false
            }
          ]
        }
      ]
    },
    {
      id: 5,
      name: 'Javascript',
      slug: 'js',
      description: 'Quiz per Javascript.',
      // Questions for the quiz
      questions: [
        {
          id: 1,
          slug: 'js-question-1',
          question: (
            <>
              <Text fontWeight={'semibold'}>
                Çfarë shfaq ekzekutimi i kodit të mëposhtëm?
              </Text>
              <Box w={'50%'}>
                <Image src={javascript_image_1} alt={'javascript-1'} />
              </Box>
              {/* <Code>
                <Text fontSize={'lg'}>
                  <span style={{ color: '#d19a60' }}>console</span>.
                  <span style={{ color: '#5fafef', fontWeight: 'bold' }}>
                    log
                  </span>
                  <span style={{ color: '#c678dd' }}>(</span>
                  <span style={{ color: '#e85352' }}>typeof</span>{' '}
                  <span style={{ color: '#d19a60' }}>NaN</span>
                  <span style={{ color: '#c678dd' }}>)</span>;
                </Text>
              </Code> */}
            </>
          ),
          answers: [
            {
              id: 1.1,
              letter: 'a',
              slug: 'answer-1.1',
              answer: 'NaN',
              correct: false
            },
            {
              id: 1.2,
              letter: 'b',
              slug: 'answer-1.2',
              answer: 'Number',
              correct: true
            },
            {
              id: 1.3,
              letter: 'c',
              slug: 'answer-1.3',
              answer: 'String',
              correct: false
            },
            {
              id: 1.4,
              letter: 'd',
              slug: 'answer-1.4',
              answer: 'Boolean',
              correct: false
            }
          ]
        },
        {
          id: 2,
          slug: 'js-question-2',
          question: (
            <>
              <Text fontWeight={'semibold'}>
                Çfarë shfaq ekzekutimi i kodit të mëposhtëm?
              </Text>
              <Box w={'50%'}>
                <Image src={javascript_image_2} alt={'javascript-2'} />
              </Box>
              {/* <Code>
                <Text fontSize={'lg'}>
                  <span style={{ color: '#d19a60' }}>console</span>.
                  <span style={{ color: '#5fafef', fontWeight: 'bold' }}>
                    log
                  </span>
                  <span style={{ color: '#c678dd' }}>(</span>
                  <span style={{ color: '#e85352' }}>typeof</span>{' '}
                  <span style={{ color: '#e85352' }}>typeof</span>{' '}
                  <span style={{ color: '#d19a60' }}>1</span>
                  <span style={{ color: '#c678dd' }}>)</span>;
                </Text>
              </Code> */}
            </>
          ),
          answers: [
            {
              id: 2.1,
              letter: 'a',
              slug: 'answer-2.1',
              answer: 'Number',
              correct: false
            },
            {
              id: 2.2,
              letter: 'b',
              slug: 'answer-2.2',
              answer: '1',
              correct: false
            },
            {
              id: 2.3,
              letter: 'c',
              slug: 'answer-2.3',
              answer: 'String',
              correct: true
            },
            {
              id: 2.4,
              letter: 'd',
              slug: 'answer-2.4',
              answer: 'Boolean',
              correct: false
            }
          ]
        },
        {
          id: 3,
          slug: 'js-question-3',
          question: (
            <>
              <Text fontWeight={'semibold'}>
                Cili do të jetë output-i i kodit të mëposhtëm?
              </Text>
              <Box w={'50%'}>
                <Image src={javascript_image_3} alt={'javascript-3'} />
              </Box>
              {/* <Code>
                <Box fontSize={'lg'}>
                  <Text>
                    <span style={{ color: '#c678dd' }}>let</span>{' '}
                    <span style={{ color: '#e85352' }}>array</span> ={' '}
                    <span>
                      <span style={{ color: '#c678dd' }}>[</span>
                      <span style={{ color: '#d19a60' }}>1</span>,{' '}
                      <span style={{ color: '#d19a60' }}>2</span>,{' '}
                      <span style={{ color: '#d19a60' }}>3</span>
                      <span style={{ color: '#c678dd' }}>]</span>
                    </span>
                    ;
                  </Text>
                  <Text>
                    <span style={{ color: '#e85352' }}>array</span>
                    <span style={{ color: '#c678dd' }}>[</span>
                    <span style={{ color: '#d19a60' }}>6</span>
                    <span style={{ color: '#c678dd' }}>]</span> ={' '}
                    <span style={{ color: '#d19a60' }}>9</span>;
                  </Text>
                  <Text>
                    <span style={{ color: '#d19a60' }}>console</span>.
                    <span style={{ color: '#5fafef', fontWeight: 'bold' }}>
                      log
                    </span>
                    <span style={{ color: '#c678dd' }}>(</span>
                    <span style={{ color: '#e85352' }}>array</span>
                    <span style={{ color: '#5fafef' }}>[</span>
                    <span style={{ color: '#d19a60' }}>9</span>
                    <span style={{ color: '#5fafef' }}>]</span>
                    <span style={{ color: '#c678dd' }}>)</span>;
                  </Text>
                </Box>
              </Code> */}
            </>
          ),
          answers: [
            {
              id: 3.1,
              letter: 'a',
              slug: 'answer-3.1',
              answer: '1',
              correct: false
            },
            {
              id: 3.2,
              letter: 'b',
              slug: 'answer-3.2',
              answer: '2',
              correct: false
            },
            {
              id: 3.3,
              letter: 'c',
              slug: 'answer-3.3',
              answer: '9',
              correct: false
            },
            {
              id: 3.4,
              letter: 'd',
              slug: 'answer-3.4',
              answer: 'undefined',
              correct: true
            }
          ]
        },
        {
          id: 4,
          slug: 'js-question-4',
          question: (
            <>
              <Text fontWeight={'semibold'}>
                Cili do të jetë output-i i kodit të mëposhtëm?
              </Text>
              <Box w={'50%'}>
                <Image src={javascript_image_4} alt={'javascript-4'} />
              </Box>
            </>
          ),
          answers: [
            {
              id: 4.1,
              letter: 'a',
              slug: 'answer-4.1',
              answer: '1 2 3 4',
              correct: false
            },
            {
              id: 4.2,
              letter: 'b',
              slug: 'answer-4.2',
              answer: '2 3 4 1',
              correct: false
            },
            {
              id: 4.3,
              letter: 'c',
              slug: 'answer-4.3',
              answer: '1 3 4 2',
              correct: false
            },
            {
              id: 4.4,
              letter: 'd',
              slug: 'answer-4.4',
              answer: '2 4 3 1',
              correct: true
            }
          ]
        },
        {
          id: 5,
          slug: 'js-question-5',
          question: (
            <>
              <Text>Cili do të jetë output-i i kodit të mëposhtëm?</Text>
              <Box w={'50%'}>
                <Image src={javascript_image_5} alt={'javascript-5'} />
              </Box>
            </>
          ),
          answers: [
            {
              id: 5.1,
              letter: 'a',
              slug: 'answer-5.1',
              answer: '[111, 44, 1, 22]',
              correct: true
            },
            {
              id: 5.2,
              letter: 'b',
              slug: 'answer-5.2',
              answer: '[111, 44, 22, 1]',
              correct: false
            },
            {
              id: 5.3,
              letter: 'c',
              slug: 'answer-5.3',
              answer: '[1, 44, 111, 22]',
              correct: false
            },
            {
              id: 5.4,
              letter: 'd',
              slug: 'answer-5.4',
              answer: '[1, 44, 22, 111]'
            }
          ]
        },
        {
          id: 6,
          slug: 'js-question-6',
          question: (
            <Text>Çfarë bën metoda `toLocaleString()` në JavaScript?</Text>
          ),
          answers: [
            {
              id: 6.1,
              letter: 'a',
              slug: 'answer-6.1',
              answer: 'Kthen një parsed string në formë JSON.',
              correct: false
            },
            {
              id: 6.2,
              letter: 'b',
              slug: 'answer-6.2',
              answer: 'Kthen një paraqitje të lokalizuar të objektit.',
              correct: false
            },
            {
              id: 6.3,
              letter: 'c',
              slug: 'answer-6.3',
              answer: (
                <Text>
                  Kthen një paraqitje të lokalizuar të vargut të një objekti në
                  formën string.
                </Text>
              ),
              correct: true
            },
            {
              id: 6.4,
              letter: 'd',
              slug: 'answer-6.4',
              answer: 'Asnjë nga përgjigjet më lartë.',
              correct: false
            }
          ]
        }
      ]
    },
    {
      id: 6,
      name: 'Multimedia',
      slug: 'Multimedia',
      description: 'Quiz per lenden Multimedia .',
      // Questions for the quiz
      questions: [
        {
          id: 1,
          slug: 'Multimedia-question-1',
          question:
            'Elementi multimedial që shpjegon idenë përmes një fotografie quhet _____.',
          answers: [
            {
              id: 1.1,
              letter: 'a',
              slug: 'answer-1.1',
              answer: 'Graphics ',
              correct: true
            },
            {
              id: 1.2,
              letter: 'b',
              slug: 'answer-1.2',
              answer: ' audio ',
              correct: false
            },
            {
              id: 1.3,
              letter: 'c',
              slug: 'answer-1.3',
              answer: 'video',
              correct: false
            }
          ]
        },
        {
          id: 2,
          slug: 'Multimedia-question-2',
          question:
            ' Inxhinierët dizajnojnë makina përpara se ti prodhojnë ato duke përdorur një aplikacion multimedial të quajtur____________',
          answers: [
            {
              id: 2.1,
              letter: 'a',
              slug: 'answer-2.1',
              answer: ' Computer-Aided Design',
              correct: true
            },
            {
              id: 2.2,
              letter: 'b',
              slug: 'answer-2.2',
              answer: ' Auto-cad',
              correct: false
            },
            {
              id: 2.3,
              letter: 'c',
              slug: 'answer-2.3',
              answer: ' Auto-Desk',
              correct: false
            }
          ]
        },
        {
          id: 3,
          slug: 'Multimedia-question-3',
          question: ' Skedarët me bitmap janë zakonisht',
          answers: [
            {
              id: 3.1,
              letter: 'a',
              slug: 'answer-3.1',
              answer: ' Madhesi skedari e madhe ',
              correct: true
            },
            {
              id: 3.2,
              letter: 'b',
              slug: 'answer-3.2',
              answer: ' te pa compresuar ',
              correct: false
            }
          ]
        },
        {
          id: 4,
          slug: 'Multimedia-question-4',
          question:
            'Elementi multimedial që bën objektin të lëvizë quhet _________.',
          answers: [
            {
              id: 4.1,
              letter: 'a',
              slug: 'answer-4.1',
              answer: ' Animacion',
              correct: true
            },
            {
              id: 4.2,
              letter: 'b',
              slug: 'answer-4.2',
              answer: ' Video',
              correct: false
            },
            {
              id: 4.3,
              letter: 'c',
              slug: 'answer-4.3',
              answer: ' Audio ',
              correct: false
            }
          ]
        },
        {
          id: 5,
          slug: 'Multimedia-question-5',
          question: 'CAM qëndron për___________',
          answers: [
            {
              id: 5.1,
              letter: 'a',
              slug: 'answer-5.1',
              answer: ' Prodhim me ndihmën e kompjuterit',
              correct: true
            },
            {
              id: 5.2,
              letter: 'b',
              slug: 'answer-5.2',
              answer: ' aplikimi kompjuterik dhe marketingu',
              correct: false
            }
          ]
        }
      ]
    },
    {
      id: 7,
      name: 'Termodinamikë',
      slug: 'termodinamika',
      description: 'Quiz për lëndën Termodinamika.',
      questions: [
        {
          id: 1,
          slug: 'termodinamika-question-1',
          question: 'Termodinamika është studimi i:',
          answers: [
            {
              id: 1.1,
              letter: 'a',
              slug: 'answer-1.1',
              answer: 'Transferimit të energjisë?',
              correct: true
            },
            {
              id: 1.2,
              letter: 'b',
              slug: 'answer-1.2',
              answer: 'Krijimit të energjisë?',
              correct: false
            },
            {
              id: 1.3,
              letter: 'c',
              slug: 'answer-1.3',
              answer: 'Shpejtësisë së reaksionit?',
              correct: false
            },
            {
              id: 1.4,
              letter: 'd',
              slug: 'answer-1.4',
              answer: 'Ndikimit të nxehtësisë në shpejtësinë e reaksionit?',
              correct: false
            }
          ]
        },
        {
          id: 2,
          slug: 'termodinamika-question-2',
          question: 'Temperatura është përllogaritja e:',
          answers: [
            {
              id: 2.1,
              letter: 'a',
              slug: 'answer-2.1',
              answer: 'Energjisë totale në një substancë?',
              correct: false
            },
            {
              id: 2.2,
              letter: 'b',
              slug: 'answer-2.2',
              answer: 'Energjisë totale kinetike në një substancë?',
              correct: false
            },
            {
              id: 2.3,
              letter: 'c',
              slug: 'answer-2.3',
              answer: 'Energjisë potenciale mesatare në një substancë?',
              correct: false
            },
            {
              id: 2.4,
              letter: 'd',
              slug: 'answer-2.4',
              answer:
                'Energjisë kinetike mesatare të molekulave në një substancë?',
              correct: true
            }
          ]
        },
        {
          id: 3,
          slug: 'termodinamika-question-3',
          question: 'Një substancë me nxehtësi specifike të lartë: ',
          answers: [
            {
              id: 3.1,
              letter: 'a',
              slug: 'answer-3.1',
              answer: 'Është gjithmonë ekstremisht e nxehtë?',
              correct: false
            },
            {
              id: 3.2,
              letter: 'b',
              slug: 'answer-3.2',
              answer: 'Kerkon një sasi të madhe energjie të nxehet?',
              correct: true
            },
            {
              id: 3.3,
              letter: 'c',
              slug: 'answer-3.3',
              answer: 'Nuk është e rëndë?',
              correct: false
            },
            {
              id: 3.4,
              letter: 'd',
              slug: 'answer-3.4',
              answer: 'Nuk kërkon një sasi të madhe energjie të nxehet?',
              correct: false
            }
          ]
        },
        {
          id: 4,
          slug: 'termodinamika-question-4',
          question:
            'Transferimi i energjisë termike midis objekteve me temperature të ndryshme quhet:',
          answers: [
            {
              id: 4.1,
              letter: 'a',
              slug: 'answer-4.1',
              answer: 'Temperaturë',
              correct: false
            },
            {
              id: 4.2,
              letter: 'b',
              slug: 'answer-4.2',
              answer: 'Nxehtësi',
              correct: true
            },
            {
              id: 4.3,
              letter: 'c',
              slug: 'answer-4.3',
              answer: 'Energji e brendshme',
              correct: false
            },
            {
              id: 4.4,
              letter: 'd',
              slug: 'answer-4.4',
              answer: 'Asnjëra nga këto',
              correct: false
            }
          ]
        },
        {
          id: 5,
          slug: 'termodinamika-question-5',
          question:
            'Formula e saktë për të konvertuar Celcius në Kelvin është:',
          answers: [
            {
              id: 5.1,
              letter: 'a',
              slug: 'answer-5.1',
              answer: 'K = C - 273',
              correct: false
            },
            {
              id: 5.2,
              letter: 'b',
              slug: 'answer-5.2',
              answer: 'K = C + 273',
              correct: true
            },
            {
              id: 5.3,
              letter: 'c',
              slug: 'answer-5.3',
              answer: 'K = C * 1.8 + 32',
              correct: false
            },
            {
              id: 5.4,
              letter: 'd',
              slug: 'answer-5.4',
              answer: 'K = C + 100',
              correct: false
            }
          ]
        },
        {
          id: 6,
          slug: 'termodinamika-question-6',
          question:
            'Sasia e nxehtësisë e kërkuar për të rritur temperaturën e 1g të diçkaje me 1°C quhet:',
          answers: [
            {
              id: 6.1,
              letter: 'a',
              slug: 'answer-6.1',
              answer: 'Nxehtësi latente',
              correct: false
            },
            {
              id: 6.2,
              letter: 'b',
              slug: 'answer-6.2',
              answer: 'Nxehtësi formimi',
              correct: false
            },
            {
              id: 6.3,
              letter: 'c',
              slug: 'answer-6.3',
              answer: 'Nxehtësi specifike',
              correct: true
            },
            {
              id: 6.4,
              letter: 'd',
              slug: 'answer-6.4',
              answer: 'Nxehtësi bashkimi',
              correct: false
            }
          ]
        },
        {
          id: 7,
          slug: 'termodinamika-question-7',
          question: 'ΔT përfaqëson:',
          answers: [
            {
              id: 7.1,
              letter: 'a',
              slug: 'answer-7.1',
              answer: 'Masën',
              correct: false
            },
            {
              id: 7.2,
              letter: 'b',
              slug: 'answer-7.2',
              answer: 'Ndryshimin e temperaturës',
              correct: true
            },
            {
              id: 7.3,
              letter: 'c',
              slug: 'answer-7.3',
              answer: 'Nxehtësinë latente',
              correct: false
            },
            {
              id: 7.4,
              letter: 'd',
              slug: 'answer-7.4',
              answer: 'Nxehtësinë specifike',
              correct: false
            }
          ]
        }
      ]
    }
  ]
}

export default data
