"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Download } from "lucide-react"

interface ResultRow {
  id: number
  image: string
  nameMatchScore: number | string
  uidMatchScore: number | string
  addressMatchScore: number | string
  overallScore: number | string
  remarks: string
  documentType: string
}

const results: ResultRow[] = [
  {
    id: 1,
    image: "168.jpg",
    nameMatchScore: 0,
    uidMatchScore: "NA",
    addressMatchScore: 0,
    overallScore: 33.33,
    remarks: "Name mismatched, Address mismatched",
    documentType: "Aadhaar",
  },
  {
    id: 2,
    image: "17.jpg",
    nameMatchScore: 100,
    uidMatchScore: "NA",
    addressMatchScore: 0,
    overallScore: 100.0,
    remarks: "Verified",
    documentType: "Aadhaar",
  },
  {
    id: 3,
    image: "182.jpg",
    nameMatchScore: 0,
    uidMatchScore: "NA",
    addressMatchScore: 0,
    overallScore: 33.33,
    remarks: "Name mismatched, Address mismatched",
    documentType: "Aadhaar",
  },
  {
    id: 4,
    image: "191.jpg",
    nameMatchScore: 0,
    uidMatchScore: "NA",
    addressMatchScore: 0,
    overallScore: 33.33,
    remarks: "Name mismatched, Address mismatched",
    documentType: "Aadhaar",
  },
  {
    id: 5,
    image: "91.jpg",
    nameMatchScore: 0,
    uidMatchScore: "NA",
    addressMatchScore: 0,
    overallScore: 0,
    remarks: "Name mismatched, Address mismatched",
    documentType: "Aadhaar",
  },
  {
    id: 6,
    image: "594.jpg",
    nameMatchScore: "undefined",
    uidMatchScore: "undefined",
    addressMatchScore: "undefined",
    overallScore: 0.0,
    remarks: "Classified as Non Aadhaar",
    documentType: "Non Aadhaar",
  },
]

export default function FraudManagementSystem() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-2xl font-bold">Aadhaar Fraud Management System</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">Upload ZIP File (Images)</p>
          <Input type="file" accept=".zip" />
        </div>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">Upload Excel File</p>
          <Input type="file" accept=".xlsx,.xls" />
        </div>
      </div>

      <Button>Upload</Button>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Results</h2>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download Results as Excel
          </Button>
        </div>

        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">Serial No.</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Name Match Score</TableHead>
                <TableHead>UID Match Score</TableHead>
                <TableHead>Address Match Score</TableHead>
                <TableHead>Overall Score</TableHead>
                <TableHead>Remarks</TableHead>
                <TableHead>Document Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.image}</TableCell>
                  <TableCell>{row.nameMatchScore}</TableCell>
                  <TableCell>{row.uidMatchScore}</TableCell>
                  <TableCell>{row.addressMatchScore}</TableCell>
                  <TableCell>{row.overallScore}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{row.remarks}</TableCell>
                  <TableCell>{row.documentType}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

