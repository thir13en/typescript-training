import CourseDetail from './course-detail';


export default function createCourseDetail({
    id,
    url,
    description,
    iconUrl,
    courseListIcon,
    seqNo,
    longDescription,
    comingSoon,
    isNew,
    isOngoing,
    Lessons,
}: any): CourseDetail {
    return {
        id,
        url,
        description,
        iconUrl,
        courseListIcon,
        seqNo,
        longDescription,
        comingSoon,
        isNew,
        isOngoing,
        lessons: Lessons.map(createLessonForDBModel),
    };
}

function createLessonForDBModel({
    id,
    seqNo,
    url,
    description,
    duration,
    pro,
    tags,
    courseId,
}: any) {
    return {
        id,
        seqNo,
        url,
        description,
        duration,
        pro,
        tags,
        courseId,
    };
}
