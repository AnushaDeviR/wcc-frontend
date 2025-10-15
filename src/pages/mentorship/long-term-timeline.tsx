// path: /mentorship/long-term-timeline

import { Box } from '@mui/material';

import { TimelineCard, Title } from '@components';

// TODO: move this to mocks
const timelineData = [
  {
    date: 'March, 2025 - November, 2025',
    title: 'Registration for mentors',
    description:
      'Mentors can apply for Mentorship throughout the year. Once a profile has been approved and published on the website, the mentor will receive a confirmation email.',
  },
  {
    date: '8th of March - 31st of March, 2025',
    title: 'Registration for mentees is open',
    description:
      'Mentees will have the opportunity to choose a mentor and apply for a long-term mentorship relationship until the end of March.',
  },
  {
    date: '8th of April, 2025',
    title: 'WCC annual mentorship program launch',
    description:
      'This discussion will cover topics such as the specific challenges that women in technology often encounter and how mentorship can provide support and guidance.',
  },
  {
    date: 'April, 2025',
    title: 'Introduction emails',
    description:
      'Once the list of matched mentors and mentees is complete, all participants will receive an introduction email containing the next steps.',
  },
];

const MentorshipLongTermTimelinePage = () => {
  return (
    <>
      <Title title="Long Term Mentorship Timeline" />
      <Box
        sx={{
          position: 'relative',
          width: '70%',
          margin: '0 auto',
          paddingLeft: '50px',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: '24px',
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: '#C1C7CE',
            zIndex: 0,
          },
        }}
      >
        {timelineData.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '-34px',
                top: '34px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: '#226488',
                zIndex: 1,
              },
            }}
          >
            <TimelineCard
              date={item.date}
              title={item.title}
              description={item.description}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default MentorshipLongTermTimelinePage;
