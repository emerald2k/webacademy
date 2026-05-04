interface Person {
  readonly id: number;
  name: string;
  email: string;
}

interface Student extends Person {
  age: number;
  grade: number;
}

interface Trainer extends Person {
  specialization: string;
  yearsOfExperience: number;
}

interface Course {
  readonly id: number;
  title: string;
  description: string;
  durationMonths: number; // in months
  price: number; // in USD
  trainer: Trainer;
  students: Student[];
}

interface CourseReservation {
  readonly id: number;
  course: Course;
  student: Student;
  paid: boolean;
  createdAt: Date;
  showReservationDetails(): void;
  status: 'pending' | 'confirmed' | 'cancelled';
}

interface PaymentProcessor {
  pay(amount: number): boolean;
}

class CardPayment implements PaymentProcessor {
  pay(amount: number): boolean {
    if (amount <= 0) {
      console.log('Invalid amount. Payment failed.');
      return false;
    }

    console.log(`Payment of $${amount} processed successfully.`);
    return true;
  }
}
class Reservation implements CourseReservation {
  constructor(
    public readonly id: number,
    public course: Course,
    public student: Student,
    public paid: boolean,
    public createdAt: Date,
    public status: 'pending' | 'confirmed' | 'cancelled',
  ) {}

  showReservationDetails(): void {
    console.log(`Reservation ID: ${this.id}`);
    console.log(`Course: ${this.course.title}`);
    console.log(`Student: ${this.student.name}`);
    console.log(`Paid: ${this.paid}`);
    console.log(`Created At: ${this.createdAt.toLocaleString()}`);
    console.log(`Status: ${this.status}`);
  }

  markAsPaid(paymentProcessor: PaymentProcessor): void {
    const paymentSuccessful = paymentProcessor.pay(this.course.price);
    if (paymentSuccessful) {
      this.paid = true;
      this.status = 'confirmed';
      console.log('Reservation marked as paid and confirmed.');
    } else {
      console.log('Payment failed. Reservation remains pending.');
    }
  }
}

// Example usage
const trainer1: Trainer = {
  id: 1,
  name: 'John Doe',
  email: 'test@test.com',
  specialization: 'Web Development',
  yearsOfExperience: 10,
};

const trainer2: Trainer = {
  id: 2,
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  specialization: 'Data Science',
  yearsOfExperience: 8,
};

const courses: Course[] = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    description: 'Learn to build modern web applications from scratch.',
    durationMonths: 6,
    price: 1000,
    trainer: trainer1,
    students: [],
  },
  {
    id: 2,
    title: 'Frontend Development',
    description: 'Introduction to data science and machine learning.',
    durationMonths: 4,
    price: 800,
    trainer: trainer2,
    students: [],
  },
  {
    id: 3,
    title: 'Backend Development',
    description: 'Learn to build server-side applications and APIs.',
    durationMonths: 5,
    price: 900,
    trainer: trainer1,
    students: [],
  },
];

const student1: Student = {
  id: 1,
  name: 'Alice',
  email: 'alice@test.com',
  age: 25,
  grade: 90,
};

function findCourseById(courses: Course[], id: number): Course | undefined {
  return courses.find((course) => course.id === id);
}

function createReservation(
  reservationId: number,
  course: Course,
  student: Student,
): Reservation {
  return new Reservation(
    reservationId,
    course,
    student,
    false,
    new Date(),
    'pending',
  );
}

const selectedCourse = findCourseById(courses, 101);
if (selectedCourse !== undefined) {
  const reservation = createReservation(1, selectedCourse, student1);
  reservation.showReservationDetails();
  const paymentProcessor = new CardPayment();
  reservation.markAsPaid(paymentProcessor);
  reservation.showReservationDetails();
} else {
  console.log('Course not found. Cannot create reservation.');
}
