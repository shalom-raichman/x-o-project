import { request } from "express"
import fs from "fs/promises"

export const getFileData = async <T> (resource: string): Promise<T[] | void> => {
    try {
        const data: string = await fs.readFile(`${__dirname}/../../../data/${resource}.json`, "utf-8")
        const parsedData: T[] = JSON.parse(data)
        return parsedData
    } catch (err) {
        console.log(err);
        
    }
}

export const saveFileData = async <T> (resource: string, data: T[]): Promise<boolean>=>{
    try {
        const stringifyData: string = JSON.stringify(data, null, 2)
        await fs.writeFile(`${__dirname}/../../../data/${resource}.json`, stringifyData, {encoding: "utf-8"})
        return true
    } catch (err) {
        console.log(err);
        return false
    }
}