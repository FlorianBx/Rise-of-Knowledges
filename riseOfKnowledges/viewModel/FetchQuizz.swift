//
//  FetchQuizz.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/17/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import Foundation

class FetchQuizz : ObservableObject {
    
    @Published var quizz: [QuizzModel] = []
    
    let url = "http://192.168.1.43:3000/getQuizz/fr"
    
    func fetchQuizzDatas() {
        let urlSession = URLSession(configuration: .default)
        urlSession.dataTask(with: URL(string: url)!) { (response, _, _) in
            guard let quizzDatas = response else { return }
            
            do {
                let decoder = try JSONDecoder().decode([QuizzModel].self, from: quizzDatas)
                print("API -> \(decoder)")
                DispatchQueue.main.async {
                    self.quizz = decoder
                }
            } catch {
                fatalError(error.localizedDescription)
            }
        }.resume()
    }
}
