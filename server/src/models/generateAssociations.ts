import LessonModel from './LessonModel';
import CourseModel from './CourseModel';


export default function generateAssociations() {
    // Course / Lesson
    CourseModel.hasMany(LessonModel, { foreignKey: 'courseId' });
    LessonModel.belongsTo(CourseModel, { foreignKey: 'courseId' });
}
