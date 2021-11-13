import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course.list.component.html'
})

export class CourseListComponent implements OnInit {
    courses: Course[] = [];
    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'xps-1980',
                duration: 120,
                rating: 5.0,
                releaseDate:'December 2, 2019',
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 50.90,
                code: 'xps-1870',
                duration: 90,
                rating: 4.5,
                releaseDate:'January 14, 2020',
            }
        ]
    }
}