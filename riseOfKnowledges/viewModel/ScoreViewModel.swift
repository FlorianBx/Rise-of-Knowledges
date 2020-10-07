//
//  ScoreViewModel.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/25/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import Foundation

class ScoreViewModel: ObservableObject {
    
    @Published var scoreb: [ScoreModel] = []
    @Published var userScore: [ScorePostModel] = []
    
    let url = "http://192.168.1.43:3000/getScore"
    
    func getScore() {
        let urlSession = URLSession(configuration: .default)
        urlSession.dataTask(with: URL(string: url)!) { (response, _, _) in
            guard let scoreDatas = response else { return }
            
            do {
                let decoder = try JSONDecoder().decode([ScoreModel].self, from: scoreDatas)
                print("API SCOREBOARD -> \(decoder)")
                DispatchQueue.main.async {
                    self.scoreb = decoder
                }
            } catch {
                fatalError(error.localizedDescription)
            }
        }.resume()
    }
    
    func postScore() {
        let url = URL(string: "http://192.168.1.43:3000/postQuiz")!
        
        guard let encoded = try? JSONEncoder().encode(userScore)
        else {
            print("Failed to encode newScore")
            return
        }
        var request = URLRequest(url: url)
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpMethod = "POST"
        request.httpBody = encoded
    }
}
