import React from "react";

interface ScheduleProps {
  day: string;
  topics: string;
  subjects: string[];
  timings: string[];
}

const ScheduleItem: React.FC<{
  subject: string;
  timing: string;
}> = ({ subject, timing }) => {
  return (
    <tr className="schedule-item">
      <td className="schedule-subject">{subject}</td>
      <td className="schedule-timing">{timing}</td>
    </tr>
  );
};

const ScheduleDay: React.FC<ScheduleProps> = ({
  day,
  topics,
  subjects,
  timings,
}) => {
  return (
    <div className="schedule-day">
      <h3>{day}</h3>
      <h4>{topics}</h4>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Timing</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <ScheduleItem
              key={index}
              subject={subject}
              timing={timings[index]}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const HillcrestSchedule: React.FC = () => {
  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  const topics = [
    "Sciences",
    "Economics/Geopolitics",
    "Social Issues",
    "Environment",
    "Literature landmarks",
    "",
  ];
  const subjects = [
    [
      "Présentation du programme & Culture G / Compréhension orale et écrite",
      "Break",
      "Linguistique/ Prononciation",
      "Evaluation vocabulaire thématique du jour + phrases de traduction",
      "Lunch",
      "Méthodologie (oral): Synthèse de docs, Élaborer une Problématique, Elaborer un plan",
      "Colle",
      "Homework",
    ],
    [
      "Culture G //comprehension orale et écrite",
      "Break",
      "Linguistique/ Prononciation",
      "Evaluation vocabulaire thématique du jour + phrases de traduction",
      "Lunch",
      "Méthodologie (écrit): Synthèse, Texte d’opinion, Expression écrite",
      "Colle",
      "Homework",
    ],
    [
      "Culture G //comprehension orale et écrite",
      "Break",
      "Linguistique/ Prononciation",
      "Evaluation vocabulaire thématique du jour + phrases de traduction",
      "Lunch",
      "Méthodologie (écrit): Synthèse, Texte d’opinion, Expression écrite",
      "Colle",
      "Homework",
    ],
    [
      "Culture G //comprehension orale et écrite",
      "Break",
      "Linguistique/ Prononciation",
      "Evaluation vocabulaire thématique du jour + phrases de traduction",
      "Lunch",
      "Méthodologie (écrit): Synthèse, Texte d’opinion, Expression écrite",
      "Colle",
      "Homework",
    ],
    [
      "Culture G //comprehension orale et écrite",
      "Break",
      "Linguistique/ Prononciation",
      "Evaluation vocabulaire thématique du jour + phrases de traduction",
      "Lunch",
      "Devoir surveillé",
      "Devoir surveillé",
      "",
    ],
    ["Correction du devoir surveillé et conseils", "Brunch"],
  ];
  const timings = [
    [
      "9h-10h45",
      "10h45-11h05",
      "10h45-11h05",
      "10h45-11h05",
      "11h30-12h",
      "12h30-13h",
      "13h-14h",
      "14h-16h",
      "16h-17h",
      "",
    ],
    [
      "10h-11h/11h30",
      "11h05-12h30",
      "11h05-12h30",
      "11h05-12h30",
      "Lunch",
      "13h-14h",
      "14h-16h",
      "16h-17h",
      "",
    ],
    [
      "10h-11h/11h30",
      "11h05-12h30",
      "11h05-12h30",
      "11h05-12h30",
      "Lunch",
      "13h-14h",
      "14h-16h",
      "16h-17h",
      "",
    ],
    [
      "10h-11h/11h30",
      "11h05-12h30",
      "11h05-12h30",
      "11h05-12h30",
      "Lunch",
      "13h-14h",
      "14h-16h",
      "16h-17h",
      "",
    ],
    [
      "10h-11h/11h30",
      "11h05-12h30",
      "11h05-12h30",
      "11h05-12h30",
      "Lunch",
      "14h-16h",
      "16h-17h",
      "",
    ],
    ["10h-11h/11h30", "11h30-12h"],
  ];

  return (
    <div className="hillcrest-schedule">
      {days.map((day, index) => (
        <ScheduleDay
          key={index}
          day={day}
          topics={topics[index]}
          subjects={subjects[index]}
          timings={timings[index]}
        />
      ))}
    </div>
  );
};

export default HillcrestSchedule;
