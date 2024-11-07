import Slider from "./Slider/Slider";


const App:React.FC = () => {
  const FirstCategory = {
    name: '',
    dates: [
      {
        title: '1975',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia quisquam aliquam excepturi temporibus maxime optio modi consequuntur facilis? Harum, aperiam blanditiis ab labore deleniti quam minus provident facere explicabo."
      },
      {
        title: '1976',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia quisquam aliquam excepturi temporibus maxime optio modi consequuntur facilis? Harum, aperiam blanditiis ab labore deleniti quam minus provident facere explicabo."
      },
      {
        title: '1977',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia quisquam aliquam excepturi temporibus maxime optio modi consequuntur facilis? Harum, aperiam blanditiis ab labore deleniti quam minus provident facere explicabo."
      },
      {
        title: '1978',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia quisquam aliquam excepturi temporibus maxime optio modi consequuntur facilis? Harum, aperiam blanditiis ab labore deleniti quam minus provident facere explicabo."
      },
      {
        title: '1979',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia quisquam aliquam excepturi temporibus maxime optio modi consequuntur facilis? Harum, aperiam blanditiis ab labore deleniti quam minus provident facere explicabo."
      },
      {
        title: '1980',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia quisquam aliquam excepturi temporibus maxime optio modi consequuntur facilis? Harum, aperiam blanditiis ab labore deleniti quam minus provident facere explicabo."
      },
    ]
  }
  const scienceCategory = {
    name: 'Наука',
    dates: [
      {
        title: '2015',
        description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
      },
      {
        title: '2016',
        description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
      },
      {
        title: '2017',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
      },
      {
        title: '2018',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
      },
      {
        title: '2019',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
      },
      {
        title: '2020',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
      },
    ]
  }
  const AnyCategory = {
    name: '',
    dates: [
      {
        title: '1999',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia quisquam aliquam excepturi temporibus maxime optio modi consequuntur facilis? Harum, aperiam blanditiis ab labore deleniti quam minus provident facere explicabo."
      },
      {
        title: '2000',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia quisquam aliquam excepturi temporibus maxime optio modi consequuntur facilis? Harum, aperiam blanditiis ab labore deleniti quam minus provident facere explicabo."
      },
      {
        title: '2001',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia quisquam aliquam excepturi temporibus maxime optio modi consequuntur facilis? Harum, aperiam blanditiis ab labore deleniti quam minus provident facere explicabo."
      },
      {
        title: '2002',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia quisquam aliquam excepturi temporibus maxime optio modi consequuntur facilis? Harum, aperiam blanditiis ab labore deleniti quam minus provident facere explicabo."
      },
      {
        title: '2003',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia quisquam aliquam excepturi temporibus maxime optio modi consequuntur facilis? Harum, aperiam blanditiis ab labore deleniti quam minus provident facere explicabo."
      },
      {
        title: '2004',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia quisquam aliquam excepturi temporibus maxime optio modi consequuntur facilis? Harum, aperiam blanditiis ab labore deleniti quam minus provident facere explicabo."
      },
    ]
  }
  const movieCategory = {
    name: 'Кино',
    dates: [
      {
        title: '1987',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: '1988',
        description: 'Purus gravida quis blandit turpis cursus in hac habitasse. Nec tincidunt praesent semper feugiat.'
      },
      {
        title: '1989',
        description: 'Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Ac feugiat sed lectus vestibulum mattis. '
      },
      {
        title: '1990',
        description: 'Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Ac feugiat sed lectus vestibulum mattis. '
      },
      {
        title: '1991',
        description: 'Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Ac feugiat sed lectus vestibulum mattis. '
      },
    ]
  }
  const journalismCategory = {
    name: 'Журналистика',
    dates: [
      {
        title: '1972',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ullam dolorum dicta esse. Eligendi repellat voluptate velit, soluta sint tenetur sunt incidunt dolore, voluptas, debitis error doloribus quisquam iusto exercitationem."
      },
      {
        title: '1974',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat qui maxime nesciunt aspernatur, rerum explicabo libero, aliquam itaque fugiat iste eos laboriosam voluptas sunt quae dolorem ducimus voluptates molestiae dolorum!"
      },
      {
        title: '1975',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat qui maxime nesciunt aspernatur, rerum explicabo libero, aliquam itaque fugiat iste eos laboriosam voluptas sunt quae dolorem ducimus voluptates molestiae dolorum!"
      },
      {
        title: '1976',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat qui maxime nesciunt aspernatur, rerum explicabo libero, aliquam itaque fugiat iste eos laboriosam voluptas sunt quae dolorem ducimus voluptates molestiae dolorum!"
      },
    ]
  }
  const literatureCategory = {
    name: 'Литература',
    dates: [
      {
        title: '1980',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A condimentum vitae sapien pellentesque habitant.'
      },
      {
        title: '1981',
        description: 'Purus gravida quis blandit turpis cursus in hac habitasse. Nec tincidunt praesent semper feugiat. Congue quisque egestas diam in arcu cursus euismod quis viverra.'
      },
    ]
  }
  //Указываем какие категории добавить в слайдер
  const categories1 = [FirstCategory,movieCategory,literatureCategory, journalismCategory,AnyCategory, scienceCategory]
  // const categories = [literatureCategory, gamesCategory]
    return (
        <div>
            <Slider categories={categories1}/>
        </div>
    );
};

export default App;