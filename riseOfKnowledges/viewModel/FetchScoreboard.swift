//
//  FetchScoreboard.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/25/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import Foundation

class FetchScoreboard: ObservableObject {
    
    @Published var scoreb: [ScoreModel] = []
    
    let url = "http://192.168.1.43:3000/getScore"
    
    func fetchScoreBoard() {
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
    
}
