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
              slug: 'answer-1.1',
              answer: 'System.out.println("Hello World");  ',
              correct: true
            },
            {
              id: 1.2,
              slug: 'answer-1.2',
              answer: 'echo("Hello World");',
              correct: false
            },
            {
              id: 1.3,
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
              slug: 'answer-2.1',
              answer: 'E gabuar',
              correct: true
            },
            {
              id: 2.2,
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
              slug: 'answer-3.1',
              answer: '// This is a comment  ',
              correct: true
            },
            {
              id: 3.2,
              slug: 'answer-3.2',
              answer: '@/ This is a comment  ',
              correct: false
            },
            {
              id: 3.3,
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
              slug: 'answer-4.1',
              answer: 'int x = 5; ',
              correct: true
            },
            {
              id: 4.2,
              slug: 'answer-4.2',
              answer: 'num x = 5 ',
              correct: false
            },
            {
              id: 4.3,
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
              slug: 'answer-5.1',
              answer: 'int x = 5; ',
              correct: true
            },
            {
              id: 5.2,
              slug: 'answer-5.2',
              answer: 'num x = 5 ',
              correct: false
            },
            {
              id: 5.3,
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
              slug: 1,
              answer: 'cout << "Hello World";',
              correct: true
            },
            {
              id: 1.2,
              slug: 2,
              answer: 'echo("Hello World");',
              correct: false
            },
            {
              id: 1.3,
              slug: 3,
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
              slug: 1,
              answer: 'E gabuar',
              correct: true
            },
            {
              id: 2.2,
              slug: 2,
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
              slug: 1,
              answer: '// This is a comment  ',
              correct: true
            },
            {
              id: 3.2,
              slug: 2,
              answer: '@/ This is a comment  ',
              correct: false
            },
            {
              id: 3.3,
              slug: 3,
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
              slug: 1,
              answer: 'int x = 5; ',
              correct: true
            },
            {
              id: 4.2,
              slug: 2,
              answer: 'num x = 5 ',
              correct: false
            },
            {
              id: 4.3,
              slug: 3,
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
              slug: 1,
              answer: '#include <iostream>   ',
              correct: true
            },
            {
              id: 5.2,
              slug: 2,
              answer: '#include <iosstring> ',
              correct: false
            },
            {
              id: 5.3,
              slug: 3,
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
              slug: 1,
              answer:
                'Te ofroje menyra per te siguruar nje prodhimin e nje software qe permbush qellimet per te cilat eshte kerkuar .  ',
              correct: true
            },
            {
              id: 1.2,
              slug: 2,
              answer: 'Te mirembaje software-in.',
              correct: false
            },
            {
              id: 1.3,
              slug: 3,
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
              slug: 1,
              answer: 'analiza,modelimi,implementimi,testimi,mirembajtja',
              correct: true
            },
            {
              id: 2.2,
              slug: 2,
              answer: 'analiza,modelimi,implementimi,testimi',
              correct: false
            },
            {
              id: 2.3,
              slug: 3,
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
              slug: 1,
              answer: 'Argumentues',
              correct: true
            },
            {
              id: 3.2,
              slug: 2,
              answer: 'Linear ',
              correct: false
            },
            {
              id: 3.3,
              slug: 3,
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
              slug: 1,
              answer: 'Black Box ',
              correct: true
            },
            {
              id: 4.2,
              slug: 2,
              answer: 'Test Box',
              correct: false
            },
            {
              id: 4.3,
              slug: 3,
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
              slug: 1,
              answer: 'funksionale dhe jofunksionale',
              correct: true
            },
            {
              id: 5.2,
              slug: 2,
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
              slug: 1,
              answer: ' Structured Query Language ',
              correct: true
            },
            {
              id: 1.2,
              slug: 2,
              answer: 'Strong Question Language  ',
              correct: false
            },
            {
              id: 1.3,
              slug: 3,
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
              slug: 1,
              answer: 'SELECT',
              correct: true
            },
            {
              id: 2.2,
              slug: 2,
              answer: 'GET',
              correct: false
            },
            {
              id: 2.3,
              slug: 3,
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
              slug: 1,
              answer: 'SELECT * FROM Person  ',
              correct: true
            },
            {
              id: 3.2,
              slug: 2,
              answer: 'GET * FROM Person ',
              correct: false
            },
            {
              id: 3.3,
              slug: 3,
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
              slug: 1,
              answer: 'INNER JOIN   ',
              correct: true
            },
            {
              id: 4.2,
              slug: 2,
              answer: 'JOINED TABLE',
              correct: false
            },
            {
              id: 4.3,
              slug: 3,
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
              slug: 1,
              answer: 'CREATE TABLE emer_tabele',
              correct: true
            },
            {
              id: 5.2,
              slug: 2,
              answer: 'CREATE DATABASE TABLE emer_tabele',
              correct: false
            }
          ]
        }
      ]
    },
    {
      id: 5,
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
              slug: 1,
              answer: ' Structured Query Language ',
              correct: true
            },
            {
              id: 1.2,
              slug: 2,
              answer: 'Strong Question Language  ',
              correct: false
            },
            {
              id: 1.3,
              slug: 3,
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
              slug: 1,
              answer: 'SELECT',
              correct: true
            },
            {
              id: 2.2,
              slug: 2,
              answer: 'GET',
              correct: false
            },
            {
              id: 2.3,
              slug: 3,
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
              slug: 1,
              answer: 'SELECT * FROM Person  ',
              correct: true
            },
            {
              id: 3.2,
              slug: 2,
              answer: 'GET * FROM Person ',
              correct: false
            },
            {
              id: 3.3,
              slug: 3,
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
              slug: 1,
              answer: 'INNER JOIN   ',
              correct: true
            },
            {
              id: 4.2,
              slug: 2,
              answer: 'JOINED TABLE',
              correct: false
            },
            {
              id: 4.3,
              slug: 3,
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
              slug: 1,
              answer: 'CREATE TABLE emer_tabele',
              correct: true
            },
            {
              id: 5.2,
              slug: 2,
              answer: 'CREATE DATABASE TABLE emer_tabele',
              correct: false
            }
          ]
        }
      ]
    }
  ]
}

export default data
