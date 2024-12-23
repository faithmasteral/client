/* eslint-disable */
import axios from "axios"
import { baseURL } from "../constant"

const JWT = localStorage.getItem("JWT")

const api_url = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-type": "application/json" || "multipart/form-data" || "image/png"
    }
})

export async function loginAPI(col, username, password) {
    return api_url.post("/auth/login", {
        col: col,
        username: username,
        password: password
    })
}

export async function getStudentEnrolledSchedules(_id) {
    return api_url.post("/get", {
        col: "enrolled",
        query: { student: _id }, select: "", join: "class_schedule teacher"
    })
}

export async function getTeacherSchedules(_id) {
    return api_url.post("/get", {
        col: "class_schedule",
        query: { teacher: _id }, select: "", join: ""
    })
}

export async function getAllSchedules() {
    return api_url.post("/get", {
        col: "class_schedule",
        query: {}, select: "", join: "teacher"
    })
}

export async function getSchedules(query, select, join) {
    return api_url.post("/get", {
        col: "class_schedule",
        query: query, select: select, join: join
    })
}

export async function AddSchedule(data) {
    return api_url.post("/insert", {
        col: "class_schedule",
        data: data
    })
}

export async function UpdateSchedule(data, query) {
    return api_url.post("/update", {
        col: "class_schedule",
        data: data,
        query: query
    })
}

export async function getAllStudents() {
    return api_url.post("/get", {
        col: "students",
        query: {}, select: "-descriptions -image"
    })
}
export async function getStudentImage(_id) {
    return api_url.post("/get-student-image", {
        _id: _id
    })
}
export async function AddStudent(formData) {
    return axios({
        method: "post",
        url: baseURL + "/add-student",
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data",
            //"Authorization": "Bearer "+ JWT 
        }
    })
}

export async function UpdateStudent(formData) {
    return axios({
        method: "post",
        url: baseURL + "/update-student",
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data",
            //"Authorization": "Bearer "+ JWT 
        }
    })
}

export async function getAllTeachers() {
    return api_url.post("/get", {
        col: "teachers",
        query: {}, select: ""
    })
}

export async function AddTeacher(data) {
    return api_url.post("/insert", {
        col: "teachers",
        data: data
    })
}

export async function UpdateTeacher(data, query) {
    return api_url.post("/update", {
        col: "teachers",
        data: data,
        query: query
    })
}

export async function getEnrolledStudentsByScheduleAndTeacher(cs, t) {
    return api_url.post("/get", {
        col: "enrolled",
        query: { "class_schedule": cs, "teacher": t}, select: "", join: "student"
    })
}

export async function getEnrolledStudents() {
    return api_url.post("/get", {
        col: "enrolled",
        query: {}, select: "", join: "student class_schedule teacher"
    })
}

export async function getEnrolledStudentsBySchedule(query, select, join) {
    return api_url.post("/get-enrolled-students", {
        col: "enrolled",
        query: query, select: select, join:  join
    })
}

export async function EnrollStudent(data) {
    return api_url.post("/insert", {
        col: "enrolled",
        data: data
    })
}

export async function UpdateEnrolledStudent(data, query) {
    return api_url.post("/update", {
        col: "enrolled",
        data: data,
        query: query
    })
}

export async function RemoveEnrolledSchedule(_id) {
    return api_url.post("/remove", {
        col: "enrolled",
        _id: _id
    })
}

export async function getAttendanceLogs(query, select, join) {
    return api_url.post("/get", {
        col: "attendance",
        query: query, select: select, join: join
    })
}

export async function getAttendanceSummary(date, query, select, join) {
    return api_url.post("/get-attendance-report", {
        date: date,
        query: query, select: select, join: join,
        csID: query.class_schedule
    })
}