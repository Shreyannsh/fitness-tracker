import "./homePage.css";

function HomePage() {
  return (
    <div className="homePage">
      <div className="upperSection">
        <div>
          <h1>Welcome </h1>
          <h1>to</h1>
          <h1>Fitness Tracker</h1>
        </div>

        <img
          src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5007.jpg?w=740&t=st=1701197649~exp=1701198249~hmac=6c139ab008315d040d1aa450f3b31e3c197ff2d90c859345e4284fe06d595463"
          alt="image01"
        />

        <div>
          <img src="../../../assets/image2.jpg" alt="image02" />
        </div>
      </div>

      <p>
        Keep your fitness goals track upto date by maintaining your excerise
        detials and food intake. Fitness tracker will tell you how much calories
        you need to achieve you goals
      </p>
    </div>
  );
}

export default HomePage;
