//
//  ScoreViewModel.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/25/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import Foundation

class ScoreViewModel: ObservableObject {
    
    @Published var allScore: [OverallScoreModel] = []
    @Published var userScore: [UserScoreModel] = []

    
    func getScore() {
        let url = "http://192.168.1.3:3000/getScore"
        
        let urlSession = URLSession(configuration: .default)
        urlSession.dataTask(with: URL(string: url)!) { data, _, _ in
            guard let scoreDatas = data else { return }
            do {
                let decoder = try JSONDecoder().decode([OverallScoreModel].self, from: scoreDatas)
//                print("API SCOREBOARD -> \(decoder)")
                DispatchQueue.main.async {
                    self.allScore = decoder
                }
            } catch {
                print(error.localizedDescription)
            }
        }.resume()
    }
    
    func postScore() {
        let url = URL(string: "http://192.168.1.3:3000/postScore")!

        guard let encoded = try? JSONEncoder().encode(userScore[0])
        else {
            print("Failed to encode newScore")
            return
        }

        var request = URLRequest(url: url)
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpMethod = "POST"
        request.httpBody = encoded
        URLSession.shared.dataTask(with: request) { data, response, error in
            guard error == nil else {
                print("Error: error calling POST")
                print(error!)
                return
            }
            guard let data = data else {
                print("Error: Did not receive data")
                return
            }
            guard let response = response as? HTTPURLResponse, (200 ..< 299) ~= response.statusCode else {
                print("Error: HTTP request failed")
                return
            }
            do {
                guard let jsonObject = try JSONSerialization.jsonObject(with: data) as? [String: Any] else {
                    print("Error: Cannot convert data to JSON object")
                    return
                }
                guard let prettyJsonData = try? JSONSerialization.data(withJSONObject: jsonObject, options: .prettyPrinted) else {
                    print("Error: Cannot convert JSON object to Pretty JSON data")
                    return
                }
                guard let prettyPrintedJson = String(data: prettyJsonData, encoding: .utf8) else {
                    print("Error: Couldn't print JSON in String")
                    return
                }
                self.getScore()
                print(prettyPrintedJson)
            } catch {
                print("Error: Trying to convert JSON data to string")
                return
            }
        }.resume()
    }
}
